const handleHTTPError = (res: Response) => {
  switch (res.status) {
    // TODO: handle other status code
    default: {
      throw res;
    }
  }
};

const handleResponseByContentType = (res: Response) => {
  if (res.headers.get('Content-Type')?.includes('text')) {
    return res.text();
  }

  // TODO: handle other content types like form data, array buffer, etc.
  return res.json();
};

const handleData = (data: any) => {
  // TODO: handle other data types
  return data;
};

const handleRequestInfo = (request: Request) => {
  return request;
};

const createRequest = (requestInfo: RequestInfo | URL, init?: RequestInit) => {
  if (requestInfo instanceof Request) {
    return requestInfo;
  }

  if (Array.isArray(requestInfo)) {
    const url = requestInfo[0];
    const search = requestInfo[1];
    // Example: fetcher(['https://example.com', { size: 10 }])
    if (typeof search === 'object' && search !== null) {
      const searchParams = new URLSearchParams(search);

      return new Request(
        searchParams.size ? `${url}?${searchParams.toString()}` : url,
        init,
      );
    }

    // Example: fetcher(['https://example.com', 'search'])
    return new Request(`${url}/${search}`, init);
  }

  return new Request(requestInfo, init);
};

export default function fetcher(
  requestInfo: RequestInfo | URL,
  init: RequestInit = {},
) {
  const req = createRequest(requestInfo, init);

  return fetch(handleRequestInfo(req))
    .then((res) => {
      // TODO: handle both server and client side error (don't throw error on server side)
      if (!res.ok) {
        return handleHTTPError(res);
      }

      return res;
    })
    .then(handleResponseByContentType)
    .then((data) => {
      return handleData(data);
    });
}
