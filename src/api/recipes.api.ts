import { DetailRecipeModel, RecipeListModel } from '../models';

import { client } from './client.api';

export interface SearchOptions {
  searchTerm: string;
  sort?: string;
  filter?: Array<{
    key: string;
    value: string;
  }>;
}

export const searchRecipes = async (
  options: SearchOptions,
): Promise<RecipeListModel> => {
  const result = await client.get<RecipeListModel>('/search', {
    params: { search: options.searchTerm,
      sort: options.sort },
  });

  return result.data;
};

export const getRecipeById = async (id: string): Promise<DetailRecipeModel> => {
  const result = await client.get<DetailRecipeModel>(`/recipe/${id}`);

  return result.data;
};
