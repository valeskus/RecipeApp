import { ImageListModel } from '../models';

import { client } from './client.api';

export const getImages = async (): Promise<{}> => {
  const result = await client.get<ImageListModel>('/images');

  return result;
};

export const postImage = async (body: FormData): Promise<any> => {
  const result = await client.post('/images/upload', body);

  return result;
};
