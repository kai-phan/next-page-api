import { createRequest } from './handleRequest';
import { handleError, handleHTTPError, handleResult } from './handleResponse';

export type ExtraOptions = {
  returnError?: boolean;
  customResponseParser?: (res: Response) => Promise<any>;
  body?: any;
};

export type CustomRequestInfo = RequestInfo | URL | [string, any];
export type CustomRequestInit = Omit<RequestInit, 'body'> & ExtraOptions;
export type ReturnError =
  | { data: null; error: any }
  | { data: any; error: null };

export interface Fetcher {
  <T extends boolean | undefined>(
    requestInfo: CustomRequestInfo,
    init?: Omit<CustomRequestInit, 'returnError'> & { returnError?: T },
  ): Promise<T extends true ? ReturnError : any>;

  get: Fetcher;
  post: Fetcher;
  put: Fetcher;
  delete: Fetcher;
  patch: Fetcher;
}

function fetcher(requestInfo: CustomRequestInfo, init: CustomRequestInit = {}) {
  const req = createRequest(requestInfo, init);

  return fetch(req)
    .then((res) => {
      if (!res.ok) {
        return handleHTTPError(res, init);
      }

      return res;
    })
    .then((res) => {
      return handleResult(res, init);
    })
    .catch((err) => {
      return handleError(err, init);
    });
}

const methods = ['get', 'post', 'put', 'delete', 'patch'];

methods.forEach((method) => {
  fetcher[method] = (
    requestInfo: CustomRequestInfo,
    init: CustomRequestInit = {},
  ) => {
    return fetcher(requestInfo, { ...init, method });
  };
});

export const createFetcher = (
  baseURL: string,
  options: CustomRequestInit = {},
) => {
  const makeURL = (baseURL: string, url: string) => {
    if (baseURL.endsWith('/') && url.startsWith('/')) {
      return baseURL + url.slice(1);
    }

    if (!baseURL.endsWith('/') && !url.startsWith('/')) {
      return baseURL + '/' + url;
    }

    return baseURL + url;
  };

  const normalized = (
    requestInfo: CustomRequestInfo,
    init: CustomRequestInit,
  ) => {
    let newRequestInfo = requestInfo;

    if (typeof requestInfo === 'string') {
      newRequestInfo = makeURL(baseURL, requestInfo);
    }

    if (Array.isArray(requestInfo)) {
      const [url, searchOrPath] = requestInfo;

      newRequestInfo = [makeURL(baseURL, url), searchOrPath];
    }

    if (newRequestInfo instanceof Request) {
      newRequestInfo = new Request(
        {
          ...newRequestInfo,
          url: makeURL(baseURL, newRequestInfo.url),
        },
        init,
      );
    }

    return {
      newRequestInfo,
      newInit: options,
    };
  };

  const fn = (requestInfo: CustomRequestInfo, init: CustomRequestInit = {}) => {
    const { newRequestInfo, newInit } = normalized(requestInfo, init);

    return fetcher(newRequestInfo, { ...init, ...newInit });
  };

  const methods = ['get', 'post', 'put', 'delete', 'patch'];

  methods.forEach((method) => {
    fn[method] = (
      requestInfo: CustomRequestInfo,
      init: CustomRequestInit = {},
    ) => {
      const { newRequestInfo, newInit } = normalized(requestInfo, init);

      return fetcher(newRequestInfo, { ...init, ...newInit, method });
    };
  });

  return fn as Fetcher;
};

export default fetcher as Fetcher;
