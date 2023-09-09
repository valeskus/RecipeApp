import { ProductsListModel } from '../models';
import { client } from './client.api';
export interface ProductItemModel {
    title: string;
    kCal: number;
    proteins: number;
    carbs: number;
    fats: number;
    units: "g" | "ml";
    translations: {
      ua: {
        title: string;
      }
    },
  }

export const getProducts = async (): Promise<ProductsListModel> => {
    const result = await client.get<ProductsListModel>('/products');

    return result.data;
};

export const postProduct = async (body: ProductItemModel): Promise<any> => {
    const result = await client.post('/products',
        {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    return result.data;
};