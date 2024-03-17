import { CategoryListModel, CategoryPostModel, ImageModel } from '../models';

import { client } from './client.api';

export const getCategories = async (): Promise<{ data: CategoryListModel }> => {
  const result = await client.get<CategoryListModel>('/categories');

  return result;
};

export const postCategory = async (body: CategoryPostModel): Promise<{}> => {
  const result = await client.post('/categories', body,
  );

  return result;
};

export const patchCategoryImage = async (body: ImageModel): Promise<{}> => {
  const result = await client.patch(`/categories:${body.id}/image`, body.url,
  );

  return result;
};
