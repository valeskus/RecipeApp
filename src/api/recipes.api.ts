import {ImageMock} from '../UI/ImageMock';
import {DetailRecipeModel, RecipeListModel} from '../models';
import {client} from './client.api';

export interface SeachOptions {
  search: string;
  sort?: string; // Reference SortOptionModel.id
  filter?: Array<{
    key: string; // Reference FilterModel.id
    value: string; // Reference FilterValueModel.id
  }>;
}

export const searchRecipes = async (options: SeachOptions) => {
  // const result = await client.get<RecipeListModel>('/recipes', {
  //   params: options,
  // });

  // return result.data;

  return {
    recipes: [
      {
        id: '1',
        title: 'Product 1',
        image: ImageMock,
        rating: 4,
        kcal: 500,
        time: '1:50',
      },
      {
        id: '2',
        title: 'Product 2',
        image: ImageMock,
        rating: 3,
        kcal: 500,
        time: '1:50',
      },
      {
        id: '3',
        title: 'Product 3',
        image: ImageMock,
        rating: 1,
        kcal: 500,
        time: '1:50',
      },
      {
        id: '4',
        title: 'Product 4',
        image: ImageMock,
        rating: 4.5,
        kcal: 500,
        time: '1:50',
      },
      {
        id: '5',
        title: 'Product 5',
        image: ImageMock,
        rating: 1.5,
        kcal: 500,
        time: '1:50',
      },
    ],
    filters: [
      {
        id: 'filter1',
        title: 'Filter 1',
        values: [
          {
            label: 'variant 1',
            id: 'variant1',
          },
          {
            label: 'variant 2',
            id: 'variant2',
          },
        ],
      },
      {
        id: 'filter2',
        title: 'Filter 2',
        values: [
          {
            label: 'variant 2.1',
            id: 'variant2.1',
          },
          {
            label: 'variant 2.2',
            id: 'variant2.2',
          },
        ],
      },
    ],
    sortOptions: [
      {
        label: 'Sort 1',
        id: 'sort1',
      },
      {
        label: 'Sort 2',
        id: 'sort2',
      },
    ],
  };
};

export const getRecipeById = async (id: string) => {
  const result = await client.get<DetailRecipeModel>(`/recipes/${id}`);
  return result.data;
};
