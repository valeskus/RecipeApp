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

  const resultCategory = Object.keys(mockData.collection.categories)
    .map((category, index) => {
      const categoryTitle: string = category.toLowerCase();
      if (categoryTitle === options.search.toLowerCase()) {
        return Object.values(mockData.collection.categories)[index];
      }
    })
    .filter(element => {
      return element !== undefined;
    });

  const resultRecipes = Object.values(mockData.collection.categories)
    .map(category => {
      return category.recipes.filter(recipe => {
        if (recipe.title.toLowerCase().includes(options.search.toLowerCase())) {
          return recipe;
        }
      });
    })
    .filter(element => {
      return element !== undefined;
    })
    .flat(1);

  const result: RecipeListModel = {
    recipes: resultCategory[0]?.recipes || resultRecipes,
    filters: mockData.collection.filters,
    sortOptions: mockData.collection.sortOptions,
  };

  return new Promise<any>(resolve => {
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

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
    }, 2000);
  });
};
