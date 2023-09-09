import { Dispatch } from 'redux';
import * as ProductsApi from '../../api/products.api';
import { ProductPostModel, ProductsListModel } from '../../models';


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

export const addProduct = async (product: ProductPostModel, dispatch: Dispatch) => {
    try {
     await ProductsApi.postProduct(product);
    } catch (error) {
        console.log(error)
    }
};
