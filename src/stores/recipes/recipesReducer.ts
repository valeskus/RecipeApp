import * as Redux from 'redux';

import {
  BaseRecipeModel,
  FilterItemValueModel,
  RecipeListModel,
  SortOptionModel,
} from '../../models';

import { RecipesActions } from './recipesActions';

interface FiltersItemModel {
  name: string;
  title: string;
  values: Array<FilterItemValueModel>;
  multiple: boolean;
}

export interface RecipesStoreState {
  recipes: Array<BaseRecipeModel>;
  total: number;
  filters: Array<FiltersItemModel>;
  sortOptions: Array<SortOptionModel>;
}

const initialState: RecipesStoreState = {
  recipes: [],
  total: 0,
  filters: [],
  sortOptions: [],
};

export function recipesReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case RecipesActions.GET: {
      const { recipes, filters, sortOptions, total } = action.payload as RecipeListModel;

      const filtersArray = Object.entries(filters).map(([name, filter]) => {

        return { title: filter.title, name, values: filter.items, multiple: filter.multiple };
      });
      const recipeList = state.total === total ? state.recipes.concat(recipes) : recipes;

      return {
        ...state,
        recipes: recipeList,
        filters: filtersArray,
        sortOptions,
        total,
      };
    }

    default:
      return state;
  }
}
