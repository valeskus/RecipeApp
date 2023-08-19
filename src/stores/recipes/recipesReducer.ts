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

      const filtersArray = Object.entries(filters).map((item) => {
        const [title, multiple, values] = [item[1].title, item[1].multiple, item[1].items];

        return { title, name: item[0], values, multiple };
      });

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
