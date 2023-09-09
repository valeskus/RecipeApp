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
  try {
    const categoryList = await CategoriesApi.getCategories();

    dispatch(actionGetCategories(categoryList));
  } catch (error) {
    console.log(error)
  }
};

export const addCategory = async (category : CategoryPostModel,dispatch: Dispatch) => {
  try {
    await CategoriesApi.getCategories();

    dispatch(actionAddCategories());
  } catch (error) {
    console.log(error)
  }
};
