import { Dispatch } from 'redux';

import * as CategoriesApi from '../../api/categories.api';
import { CategoryListModel, CategoryPostModel } from '../../models';

export enum CategoriesActions {
  GET = '@categories/get',
  ERROR = '@categories/error',
}

const actionGetCategories = (payload: CategoryListModel) => ({
  type: CategoriesActions.GET,
  payload,
});

const actionError = (key: string, error: unknown) => ({
  type: CategoriesActions.ERROR,
  payload: { [key]: error },
});

export const getCategories = async (dispatch: Dispatch) => {
  try {
    const categoryList = await CategoriesApi.getCategories();

    dispatch(actionGetCategories(categoryList));
  } catch (error) {
    dispatch(actionError('getCategories', error));
  }

};

export const addCategory = async (category: CategoryPostModel, dispatch: Dispatch) => {
  try {
    await CategoriesApi.postCategory(category);
  } catch (error) {
    dispatch(actionError('postCategory', error));
  }

};
