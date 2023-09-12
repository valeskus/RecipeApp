import { CategoryListModel, CategoryPostModel } from '../models';

import { client } from './client.api';

export const getCategories = async (): Promise<{ data: CategoryListModel }> => {
  const result = await client.get<CategoryListModel>('/categories');

  return result;
};

export const postCategory = async (body: CategoryPostModel): Promise<any> => {
  const result = await client.post('/categories', body,
  );
  console.log(result);

  return result;
};
