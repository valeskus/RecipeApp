import { Dispatch } from 'redux';

import * as CategoriesApi from '../../api/categories.api';
import { CategoryListModel, CategoryPostModel } from '../../models';

export enum CategoriesActions {
  GET = '@categories/get',
  POST = '@categories/post',
}

const actionGetCategories = (payload: CategoryListModel) => ({
  type: CategoriesActions.GET,
  payload,
});

const actionAddCategories = () => ({
  type: CategoriesActions.POST,
});

export const getCategories = async (dispatch: Dispatch) => {
  const categoryList = await CategoriesApi.getCategories();

  dispatch(actionGetCategories(categoryList));

};

export const addCategory = async (category: CategoryPostModel, dispatch: Dispatch) => {
  await CategoriesApi.getCategories();

  dispatch(actionAddCategories());

};
