import { CategoryListModel, CategoryModel, CategoryPostModel } from '../models';

import { client } from './client.api';


export const getCategories = async (): Promise<CategoryListModel> => {
    const result = await client.get<CategoryListModel>('/categories');

    return result.data;
};

export const postCategory = async (body: CategoryPostModel): Promise<any> => {
    const result = await client.post('/categories',
        {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        });

    return result.data;
};