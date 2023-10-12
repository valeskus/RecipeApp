import { all, fork } from 'redux-saga/effects';

import { watchGetCategories, watchPostCategory } from './categories';
import { watchGetProducts, watchPostProduct } from './product';
import { watchPostRecipe } from './recipe';
import { watchGetImages, watchPostImage } from './images';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    fork(watchPostCategory),
    fork(watchGetProducts),
    fork(watchPostProduct),
    fork(watchPostRecipe),
    fork(watchGetImages),
    fork(watchPostImage),
  ]);
};
