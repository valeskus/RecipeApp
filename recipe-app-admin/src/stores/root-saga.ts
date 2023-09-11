import { all, fork } from 'redux-saga/effects';

import { watchGetCategories } from './categories/sagas';

export const rootSaga = function* () {
  yield all([
    fork(watchGetCategories),
    // Other forks
  ]);
};
