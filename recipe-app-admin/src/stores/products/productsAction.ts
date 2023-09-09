import { Dispatch } from 'redux';
import * as ProductsApi from '../../api/products.api';
import { ProductModel, ProductsListModel } from '../../models';


export enum ProductsActions {
    GET = '@products/get',
    POST = '@products/post',
}

const actionGetProducts = (payload: ProductsListModel) => ({
    type: ProductsActions.GET,
    payload
});

const actionAddProduct = (payload: ProductModel) => ({
    type: ProductsActions.POST,
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

export const addProduct = async (product: ProductModel, dispatch: Dispatch) => {
    try {
        const productItem = await ProductsApi.postProduct(product);
        if (!productItem) {
            return
        }
        dispatch(actionAddProduct(productItem));
    } catch (error) {
        console.log(error)
    }
};
