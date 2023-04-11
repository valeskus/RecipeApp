import {createStore, combineReducers} from 'redux';
import {categoriesReducer} from './categories';
import {recipesesReducer} from './recipes/recipesReducer';
import {recipeDetailsReducer} from './recipe/recipeDetailsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipes: recipesesReducer,
  recipeDetails: recipeDetailsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
