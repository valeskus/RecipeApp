import * as Redux from 'redux';
import {CategoryListModel, CategoryModel} from '../../models';
import {CategoriesActions} from './categoriesActions';

export interface CategoryStoreState {
  categories: Array<CategoryModel>;
}

const initialState: CategoryStoreState = {
  categories: [],
};

export function categoriesReducer(
  state = initialState,
  action: Redux.AnyAction,
): CategoryStoreState {
  switch (action.type) {
    case CategoriesActions.GET: {
      const {categories} = action.payload as CategoryListModel;

      return {
        ...state,
        categories,
      };
    }
    default:
      return state;
  }
}
