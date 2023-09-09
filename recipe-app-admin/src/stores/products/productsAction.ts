import { Dispatch } from 'redux';

import * as ProductsApi from '../../api/products.api';
import { ProductPostModel, ProductsListModel } from '../../models';

export enum ProductsActions {
  GET = '@products/get',
  POST = '@products/post',
}

const actionGetProducts = (payload: ProductsListModel) => ({
  type: ProductsActions.GET,
  payload,
});

const actionAddProduct = (payload: any) => ({
  type: ProductsActions.POST,
  payload,
});

export const getProducts = async (dispatch: Dispatch) => {
  const productsList = await ProductsApi.getProducts();

  dispatch(actionGetProducts(productsList));

};

export const addProduct = async (product: ProductPostModel, dispatch: Dispatch) => {
  const result = await ProductsApi.postProduct(product);
  dispatch(actionAddProduct(result));
};
