import * as Redux from 'redux';

import {
  BaseRecipeModel,
  FilterModel,
  RecipeListModel,
  SortOptionModel,
} from '../../models';

import { RecipesActions } from './recipesActions';

export interface RecipesStoreState {
  recipes: Array<BaseRecipeModel>;
  filters: FilterModel;
  sortOptions: Array<SortOptionModel>;
}

const initialState: RecipesStoreState = {
  recipes: [],
  filters: {
    calories: [],
    dietType: [],
    difficulty: [],
    mealType: [],
    totalTime: [],
  },
  sortOptions: [],
};

export function recipesReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case RecipesActions.GET: {
      const { recipes, filters, sortOptions } = action.payload as RecipeListModel;

      return {
        ...state,
        recipes,
        filters,
        sortOptions,
      };
    }

    default:
      return state;
  }
}
