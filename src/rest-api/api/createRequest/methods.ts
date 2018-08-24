import { createRequest } from './createRequest';

export const get = (url: string, params?) => (
  createRequest(url, { method: 'GET' }, params)
);

export const post = (url: string, params?) => (
  createRequest(
    url,
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
    null,
  )
);

export const put = (url: string, params?) => (
  createRequest(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(params),
    },
    null,
  )
);

export const deleteMethod = (url: string, params?) => (
  createRequest(url, { method: 'DELETE' }, params)
);
