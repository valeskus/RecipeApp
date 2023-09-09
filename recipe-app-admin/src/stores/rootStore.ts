import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from './products/productsReducer';
import { categoriesReducer } from './categories/categoriesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
