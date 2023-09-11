import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CategoryListModel, CategoryModel } from '../../models';

export interface CategoryStoreState {
  categories: Array<CategoryModel>;
}

const initialState: CategoryStoreState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories(state, action: PayloadAction<CategoryListModel>) {
      // state.categories = action.payload.categories;
      const { categories } =  action.payload;

      return {
        categories,
      };
    },

  },
});

export const { getCategories } = categoriesSlice.actions;
// export default categoriesSlice.reducer;
