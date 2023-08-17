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
}

const initialState: RecipesStoreState = {
  recipes: [],
  filters: [],
  sortOptions: [],
};

export function recipesReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case RecipesActions.GET: {
      const { recipes, filters, sortOptions } = action.payload as RecipeListModel;

      const filtersArray = Object.values(filters)
        .map(({ title, items, multiple }, index) => ({ title,
          name: Object.keys(filters)[index], values: items, multiple }));

      return {
        ...state,
        recipes,
        filters: filtersArray,
        sortOptions,
      };
    }

    default:
      return state;
  }
}
