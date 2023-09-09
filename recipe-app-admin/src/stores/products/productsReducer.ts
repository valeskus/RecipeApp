import * as Redux from 'redux';

import { ProductModel, ProductsListModel } from '../../models';

import { ProductsActions } from './productsAction';

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

    default:
      return state;
  }
}
