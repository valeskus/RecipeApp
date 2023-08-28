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
  filters: Array<FiltersItemModel>;
  sortOptions: Array<SortOptionModel>;
  total: number;
}

const initialState: RecipesStoreState = {
  recipes: [],
  filters: [],
  sortOptions: [],
  total: 0,
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

      const recipesList = state.total === total ? state.recipes.concat(recipes) : recipes;

      return {
        ...state,
        recipes: recipesList,
        filters: filtersArray,
        sortOptions,
        total,
      };
    }

    default:
      return state;
  }
}
