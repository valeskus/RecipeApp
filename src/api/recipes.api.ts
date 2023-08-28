import { DetailRecipeModel, RecipeListModel } from '../models';

import { client } from './client.api';

export interface SearchOptions {
  searchTerm: string;
  sort?: string;
  filter?: Array<{
    key: string;
    value: string;
  }>;
  offset?: number;
  pageSize?: number;
}

export const searchRecipes = async (
  options: SearchOptions,
): Promise<RecipeListModel> => {
  const result = await client.get<RecipeListModel>('/search', {
    params: {
      search: options.searchTerm,
      sort: options.sort,
      offset: options.offset,
      pageSize: options.pageSize,
      ...(options.filter || []).reduce((prev, { key, value }) => ({
        ...prev,
        [key]: value,
      }), {}),
    },
  });

  return result.data;
};

export const getRecipeById = async (id: string): Promise<DetailRecipeModel> => {
  const result = await client.get<DetailRecipeModel>(`/recipe/${id}`);

  return result.data;
};
