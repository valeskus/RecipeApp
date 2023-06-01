import {CategoryListModel} from '../models';
import {client} from './client.api';

export const getCategories = async (): Promise<CategoryListModel> => {
  const result = await client.get<CategoryListModel>('/categories');
  return result.data;
};
