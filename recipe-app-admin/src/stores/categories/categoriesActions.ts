import { AnyAction, createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import * as CategoriesApi from '../../api/categories.api';

import { getCategories } from './categoriesSlice';
interface Error {
  key: string;
  error: unknown;
}

export const setError = createAction<Error>('categories/error');

export const getCategoriesList = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const categoryList = await CategoriesApi.getCategories();

    dispatch(getCategories(categoryList));
  } catch (error) {
    dispatch(setError({ key: 'getCategories', error }));
  }

};
