import axios from 'axios';
import {DetailRecipeModel, RecipeListModel} from '../models';

import {API_URL} from '@env';

export interface SeachOptions {
  search: string;
  sort?: string; // Reference SortOptionModel.id
  filter?: Array<{
    key: string; // Reference FilterModel.id
    value: string; // Reference FilterValueModel.id
  }>;
}

const client = axios.create({
  baseURL: API_URL,
});

export const searchRecipes = async (options: SeachOptions) => {
  const result = await client.get<RecipeListModel>('/recipes', {
    params: options,
  });

  return result;
};

export const getRecipeById = async (id: string) => {
  try {
    const result = await axios.get<DetailRecipeModel>(
      `${API_URL}/recipes/${id}`,
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
