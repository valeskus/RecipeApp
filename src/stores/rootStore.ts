import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { categoriesReducer } from './categories/categoriesReducer';
import { recipesReducer } from './recipes/recipesReducer';
import { recipeDetailsReducer } from './recipeDetails/recipeDetailsReducer';
import { searchReducer } from './search/searchReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer,
  search: searchReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
