import { ProductModel, ProductsListModel } from '../models';
import { client } from './client.api';

export const getProducts = async (): Promise<ProductsListModel> => {
  const result = await client.get<ProductsListModel>('/products');

  return result.data;
};