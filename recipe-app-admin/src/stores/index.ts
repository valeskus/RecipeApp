// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { categoriesSlice } from './categories/categoriesSlice';
import { rootSaga } from './root-saga';
import { productsSlice } from './product/productsSlice';
import { recipesSlice } from './recipe/recipeSlice';
import { imagesSlice } from './images/imagesSlice';
import { addImagesSlice } from './addImage';
import { addInstructionImageSlice } from './addInstructionImage';
import { createCategorySlice } from './createCategory';
import { createProductSlice } from './createProduct';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
  createCategory: createCategorySlice.reducer,
  products: productsSlice.reducer,
  createProduct: createProductSlice.reducer,
  recipes: recipesSlice.reducer,
  images: imagesSlice.reducer,
  addImage: addImagesSlice.reducer,
  addInstructionImage: addInstructionImageSlice.reducer,

});

export const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(rootSaga);

export type RootStore = ReturnType<typeof store.getState>;
