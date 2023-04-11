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
  const result = await client.get<RecipeListModel>('/recipes', {
    params: options,
  });

  return result.data;
};

export const getRecipeById = async (id: string) => {
  const result = await client.get<DetailRecipeModel>(`/recipes/${id}`);
  return result.data;
};
