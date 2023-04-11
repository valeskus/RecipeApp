import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {categoriesReducer} from './categories';
import {recipesesReducer} from './recipes/recipesReducer';
import {recipeDetailsReducer} from './recipeDetails/recipeDetailsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipes: recipesesReducer,
  recipeDetails: recipeDetailsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({reducer: rootReducer});
