import { Dispatch } from 'redux';

import * as CategoriesApi from '@api/categories.api';

import { CategoryListModel } from '../../models';

export enum CategoriesActions {
  GET = '@categories/get',
  ERROR = '@error/categories',
}

const actionGetCategories = (payload: CategoryListModel) => ({
  type: CategoriesActions.GET,
  payload,
});

const actionError = (error: unknown) => ({
  type: CategoriesActions.ERROR,
  payload: error,
});

export const getCategories = async (dispatch: Dispatch) => {
  try {
    const categoryList = await CategoriesApi.getCategories();

    dispatch(actionGetCategories(categoryList));
  } catch (error) {
    dispatch(actionError(error));
  }
};
