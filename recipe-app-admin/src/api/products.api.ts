import { ProductPostModel, ProductsListModel } from '../models';
import { client } from './client.api';


export const getProducts = async (): Promise<ProductsListModel> => {
    const result = await client.get<ProductsListModel>('/products');

    return result.data;
};

export const postProduct = async (body: ProductPostModel): Promise<any> => {
    const result = await client.post('/products',
        {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    return result.data;
};