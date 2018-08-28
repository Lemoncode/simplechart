import { headers, ContentTypeHandler, contenTypeHandlers } from './constants';

export const responseHandler = (response: Response): Promise<any> => (
  response.ok ?
    extractPayload(response) :
    responseError(response)
);

const extractPayload = (response: Response): Promise<any> => {
  const contentTypeHandler = getContentTypeHandler(response);

  return (
    Boolean(contentTypeHandler) ?
      response[contentTypeHandler.handler]() :
      response.text()
  );
};

const getContentTypeHandler = (response: Response): ContentTypeHandler => {
  const contentType = response.headers.get(headers.contentType);
  return contenTypeHandlers.find((rh) => contentType.includes(rh.contentType));
};

const responseError = (response: Response): Promise<any> => {
  return response.json()
    .then((error) => (
      Promise.reject(error.message)
    ));
};
