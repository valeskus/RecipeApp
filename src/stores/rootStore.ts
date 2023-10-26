import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { errorHandler } from './middleware/errorHandler';
import { errorsReducer } from './errors/errorsReducer';
import { searchReducer } from './search/searchReducer';
import { recipeDetailsReducer } from './recipeDetails/recipeDetailsReducer';
import { recipesReducer } from './recipes/recipesReducer';
import { categoriesReducer } from './categories/categoriesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer,
  search: searchReducer,
  errors: errorsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer, middleware: [errorHandler] });
