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

  get<T extends boolean | undefined>(
    requestInfo: CustomRequestInfo,
    init?: Omit<CustomRequestInit, 'method' | 'returnError'> & {
      returnError?: T;
    },
  ): Promise<T extends true ? ReturnError : any>;

  post<T extends boolean | undefined>(
    requestInfo: CustomRequestInfo,
    init?: Omit<CustomRequestInit, 'method' | 'returnError'> & {
      returnError?: T;
    },
  ): Promise<T extends true ? ReturnError : any>;

  put<T extends boolean | undefined>(
    requestInfo: CustomRequestInfo,
    init?: Omit<CustomRequestInit, 'method' | 'returnError'> & {
      returnError?: T;
    },
  ): Promise<T extends true ? ReturnError : any>;

  delete<T extends boolean | undefined>(
    requestInfo: CustomRequestInfo,
    init?: Omit<CustomRequestInit, 'method' | 'returnError'> & {
      returnError?: T;
    },
  ): Promise<T extends true ? ReturnError : any>;

  patch<T extends boolean | undefined>(
    requestInfo: CustomRequestInfo,
    init?: Omit<CustomRequestInit, 'method' | 'returnError'> & {
      returnError?: T;
    },
  ): Promise<T extends true ? ReturnError : any>;
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

export default fetcher as Fetcher;
