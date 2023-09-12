import { all, fork } from 'redux-saga/effects';

import { watchGetCategories, watchPostCategory } from './categories/categoriesSagas';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    fork(watchPostCategory),
    // Other forks
  ]);
};
