import { all, fork } from 'redux-saga/effects';

import { watchGetCategories, watchPostCategory } from './categories';
import { watchGetProducts, watchPostProduct } from './product';
import { watchPostInstructionImage, watchPostRecipe, watchPostRecipeImage } from './recipe';
import { watchGetImages, watchPostImage } from './images';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    fork(watchPostCategory),
    fork(watchGetProducts),
    fork(watchPostProduct),
    fork(watchPostRecipe),
    fork(watchPostRecipeImage),
    fork(watchPostInstructionImage),
    fork(watchGetImages),
    fork(watchPostImage),
  ]);
};
