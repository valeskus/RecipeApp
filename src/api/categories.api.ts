import {ImageMock} from '../UI/ImageMock';
import {CategoryListModel} from '../models';
// import {client} from './client.api';

export const getCategories = async (): Promise<CategoryListModel> => {
  // const result = await client.get<CategoryListModel>('/categories');
  // return result.data;

  return {
    categories: [
      {id: '1', title: 'Category 1', image: ImageMock},
      {id: '2', title: 'Category 2', image: ImageMock},
      {id: '3', title: 'Category 3', image: ImageMock},
      {id: '4', title: 'Category 4', image: ImageMock},
      {id: '5', title: 'Category 5', image: ImageMock},
      {id: '6', title: 'Category 6', image: ImageMock},
    ],
  };
};
