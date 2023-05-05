import {ImageMock} from '../UI/ImageMock';
import {mockData} from '../mockData';
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

export const searchRecipes = async (
  options: SeachOptions,
): Promise<RecipeListModel> => {
  // const result = await client.get<RecipeListModel>('/recipes', {
  //   params: options,
  // });

  // return result.data;

  return mockData.recipesList;
};

// TODO Specify rerturn type for all api calls

export const getRecipeById = async (id: string): Promise<DetailRecipeModel> => {
  // const result = await client.get<DetailRecipeModel>(`/recipes/${id}`);
  // return result.data;
  return new Promise<any>(resolve => {
    setTimeout(() => {
      const recipes = mockData.recipesDetailsList;
      const result = recipes.find(recipe => {
        return recipe.id === id;
      });
      resolve(result);
    }, 5000);
  });
};
