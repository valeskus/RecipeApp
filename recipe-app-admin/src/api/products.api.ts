import { ProductModel, ProductsListModel } from '../models';
import { client } from './client.api';

export const getProducts = async (): Promise<ProductsListModel> => {
    const result = await client.get<ProductsListModel>('/products');

    return result.data;
};

export const postProduct = async (body: ProductModel): Promise<ProductModel> => {
    const result = await client.post<ProductModel>('/products',
        {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    return result.data;
};