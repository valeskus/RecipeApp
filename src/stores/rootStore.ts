import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { categoriesReducer } from './categories';
import { recipesReducer } from './recipes';
import { recipeDetailsReducer } from './recipeDetails';
import { searchReducer } from './search';
import { errorHandler } from './middleware/errorHandler';
import { errorsReducer } from './errors';
import { languagesReducer } from './languages';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer,
  search: searchReducer,
  errors: errorsReducer,
  languages: languagesReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer, middleware: [errorHandler] });
