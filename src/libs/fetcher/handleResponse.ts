import { CustomRequestInit } from './';

export function handleResponseByContentType(
  res: Response,
  init: CustomRequestInit = {},
) {
  if (init.customResponseParser) {
    return init.customResponseParser(res);
  }

  if (res.headers.get('Content-Type')?.includes('text')) {
    return res.text();
  }

  if (res.headers.get('Content-Type')?.includes('json')) {
    return res.json();
  }

  if (res.headers.get('Content-Type')?.includes('blob')) {
    return res.blob();
  }

  return res.formData();
}

export function handleHTTPError(
  res: Response,
  init: CustomRequestInit = {},
): Promise<Response> {
  switch (res.status) {
    // TODO: handle other status code
    default: {
      throw res;
    }
  }
}

export async function handleError(err: Response, init: CustomRequestInit = {}) {
  if (!init.returnError) {
    throw err;
  }

  return await handleResult(err, init);
}

export async function handleResult(
  res: Response,
  init: CustomRequestInit = {},
) {
  const result = await handleResponseByContentType(res, init);

  if (init.returnError) {
    return res.ok
      ? { data: result, error: null }
      : { data: null, error: result };
  }

  return result;
}
