export const headers = {
  accept: 'Accept',
  contentType: 'Content-Type',
};

export const contentTypes = {
  json: 'application/json',
};

export interface ContentTypeHandler {
  contentType: string;
  handler: string;
}

export const contenTypeHandlers: ContentTypeHandler[] = [
  {
    contentType: contentTypes.json,
    handler: 'json',
  },
];
