import { headers, contentTypes } from './constants';

export const defaultOptions: RequestInit = {
  // NOTE: we can't use new Headers({...}) because isomorphic-unfetch has not defined it.
  headers: {
    [headers.accept]: contentTypes.json,
    [headers.contentType]: contentTypes.json,
  },
};
