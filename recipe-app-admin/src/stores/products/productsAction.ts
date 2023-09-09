import { Dispatch } from 'redux';
import * as ProductsApi from '../../api/products.api';
import { ProductsListModel } from '../../models';


export enum ProductsActions {
  GET = '@products/get',
  POST = '@products/post',
}

const actionGetProducts = (payload: ProductsListModel) => ({
  type: ProductsActions.GET,
  payload
});

export const getProducts = async (dispatch: Dispatch) => {
  try {
    const productsList = await ProductsApi.getProducts();

    dispatch(actionGetProducts(productsList));
  } catch (error) {
console.log(error)
  }
};
