import { CustomRequestInfo, CustomRequestInit } from './';

export function handleInitOptions(init: CustomRequestInit = {}): RequestInit {
  const newInit = { ...init };

  delete newInit.returnError;
  delete newInit.customResponseParser;

  if (newInit.method === 'GET') return newInit;
  if (newInit.method === 'HEAD') return newInit;
  if (newInit.method === 'OPTIONS') return newInit;

  const headers = new Headers(newInit.headers);

  if (headers.has('Content-Type')) return newInit;

  if (typeof init.body === 'string') {
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    newInit.headers = headers;
    return newInit;
  }

  if (typeof init.body === 'object' && !isFormData(init.body)) {
    headers.set('Content-Type', 'application/json');
    newInit.headers = headers;
    newInit.body = JSON.stringify(newInit.body);
    return newInit;
  }
  // the body is FormData or other types

  return newInit;
}

export function createRequest(
  requestInfo: CustomRequestInfo,
  init?: RequestInit,
) {
  const requestInit = handleInitOptions(init);

  if (requestInfo instanceof Request) {
    return requestInfo;
  }

  if (Array.isArray(requestInfo)) {
    const [url, searchOrPath] = requestInfo;

    if (typeof searchOrPath === 'object' && searchOrPath !== null) {
      const searchParams = new URLSearchParams(searchOrPath);

      return new Request(
        searchParams.size ? `${url}?${searchParams.toString()}` : url,
        requestInit,
      );
    }

    return new Request(`${url}/${searchOrPath}`, requestInit);
  }

  return new Request(requestInfo, requestInit);
}

export function isFormData(body): body is FormData {
  if (typeof window === 'undefined') return false;
  return body instanceof FormData;
}
