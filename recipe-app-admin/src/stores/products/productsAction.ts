import { Dispatch } from 'redux';

import * as ProductsApi from '../../api/products.api';
import { ProductPostModel, ProductsListModel } from '../../models';

export enum ProductsActions {
  GET = '@products/get',
  ERROR = '@products/error',
}

const actionGetProducts = (payload: ProductsListModel) => ({
  type: ProductsActions.GET,
  payload,
});

const actionError = (key: string, error: unknown) => ({
  type: ProductsActions.ERROR,
  payload: { [key]: error },
});

export const getProducts = async (dispatch: Dispatch) => {
  try {
    const productsList = await ProductsApi.getProducts();

    dispatch(actionGetProducts(productsList));
  } catch (error) {
    dispatch(actionError('getProducts', error));
  }

};

export const addProduct = async (product: ProductPostModel, dispatch: Dispatch) => {
  try {
    await ProductsApi.postProduct(product);
  } catch (error) {
    dispatch(actionError('postProduct', error));
  }
};
