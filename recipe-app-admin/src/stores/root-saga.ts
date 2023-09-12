import { all, fork } from 'redux-saga/effects';

import { watchGetCategories, watchPostCategory } from './categories/categoriesSagas';
import { watchGetProducts } from './product';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    fork(watchPostCategory),
    fork(watchGetProducts),
    // Other forks
  ]);
};
