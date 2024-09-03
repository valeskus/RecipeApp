import { all, fork } from 'redux-saga/effects';

import { watchGetCategories } from './categories';
import { watchGetProducts } from './product';
import { watchPostRecipe } from './recipe';
import { watchGetImages } from './images';
import { watchPostImage } from './addImage';
import { watchPostInstructionImage } from './addInstructionImage';
import { watchPostCategory } from './createCategory';
import { watchPostProduct } from './createProduct';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    fork(watchPostCategory),
    fork(watchGetProducts),
    fork(watchPostProduct),
    fork(watchPostRecipe),
    fork(watchGetImages),
    fork(watchPostImage),
    fork(watchPostInstructionImage),
  ]);
};
