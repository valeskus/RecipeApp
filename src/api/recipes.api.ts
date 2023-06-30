import { DetailRecipeModel, RecipeListModel, SearchOptions } from '../models';

import { client } from './client.api';

export const searchRecipes = async (
  options: SearchOptions,
): Promise<RecipeListModel> => {
  const result = await client.get<RecipeListModel>('/search', {
    params: options,
  });

  return result.data;
};

export const getRecipeById = async (id: string): Promise<DetailRecipeModel> => {
  const result = await client.get<DetailRecipeModel>(`/recipe/${id}`);

  return result.data;
};
