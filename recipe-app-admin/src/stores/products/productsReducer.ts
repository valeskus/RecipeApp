import * as Redux from 'redux';

import { ProductsActions } from './productsAction';
import { ProductModel, ProductsListModel } from '../../models';

export interface ProductsStoreState {
    products: Array<ProductModel>;
}

const initialState: ProductsStoreState = {
    products: [],
};

export function productsReducer(
    state = initialState,
    action: Redux.AnyAction,
): ProductsStoreState {
    switch (action.type) {
        case ProductsActions.GET: {
            const { products } = action.payload as ProductsListModel;

            return {
                products: products || state.products,
            };
        }
        case ProductsActions.POST: {
            const product = action.payload as ProductModel;
            return {
                ...state,
                products: [...state.products, product],
            };
        }

        default:
            return state;
    }
}
