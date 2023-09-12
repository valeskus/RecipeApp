import { all, fork } from 'redux-saga/effects';

import { watchGetCategories, watchPostCategory } from './categories/sagas';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    fork(watchPostCategory),
    // Other forks
  ]);
};
