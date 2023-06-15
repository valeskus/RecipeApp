import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { categoriesReducer } from './categories/categoriesReducer';
import { recipesReducer } from './recipes/recipesReducer';
import { recipeDetailsReducer } from './recipeDetails/recipeDetailsReducer';
import { searchReducer } from './search/searchReducer';
import { errorHandler } from './middleware/errorHandler';
import { errorsReducer } from './errors/errorsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer,
  search: searchReducer,
  errors: errorsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer, middleware: [errorHandler] });
