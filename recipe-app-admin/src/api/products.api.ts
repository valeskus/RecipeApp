import { ProductPostModel, ProductsListModel } from '../models';

import { client } from './client.api';

export const getProducts = async (): Promise<{}> => {
  const result = await client.get<ProductsListModel>('/products');

  return result;
};

export const postProduct = async (body: ProductPostModel): Promise<any> => {
  const result = await client.post('/products', body);

  return result;
};
