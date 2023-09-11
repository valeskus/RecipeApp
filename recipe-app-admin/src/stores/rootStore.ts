import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { categoriesSlice } from './categories/categoriesSlice';

const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
export type RootStore = ReturnType<typeof store.getState>;
