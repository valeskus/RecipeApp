import * as Redux from 'redux';

import { TimeManager } from '../../managers/TimeManager';
import {
  BaseRecipeModel,
  FilterModel,
  RecipeListModel,
  SortOptionModel,
} from '../../models';

import { RecipesActions } from './recipesActions';

export interface RecipesStoreState {
  recipes: Array<BaseRecipeModel>;
  filters: Array<FilterModel>;
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
      const recipesUpdateTime = recipes.map((recipe) => {
        const timeInHours = TimeManager.getHours(recipe.time);

        return { ...recipe, time: timeInHours };
      });

      return {
        ...state,
        recipesUpdateTime,
        filters,
        sortOptions,
      };
    }

    default:
      return state;
  }
}
