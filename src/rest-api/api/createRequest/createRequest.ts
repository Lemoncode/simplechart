import fetch from 'isomorphic-unfetch';
import { stringify } from 'qs';
import { responseHandler } from './responseHandler';
import { defaultOptions } from './defaultOptions';

export const createRequest = (url: string, options: RequestInit, params?): Promise<any> => (
  fetch(buildURL(url, params), {
    ...defaultOptions,
    ...options,
  })
    .then((response) => responseHandler(response))
    .catch((error) => Promise.reject(error.message))
);

const buildURL = (url, params?) => {
  const baseUrl = `${process.env.BASE_API_URL}${url}`;

  return Boolean(params) ?
    `${baseUrl}${stringify(params, {
      addQueryPrefix: true,
    })}` :
    baseUrl;
};
