import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IMAGE_UPDATE, UpdateImageStateType } from '../types';
import { ImageModel } from '../../models';

const updateCategoryImageInitialState: UpdateImageStateType = {
  status: '',
  error: '',
  isLoading: false,
};

export const editCategoryImageSlice = createSlice({
  name: IMAGE_UPDATE,
  initialState: updateCategoryImageInitialState,
  reducers: {
    patchCategoryImage: (state: UpdateImageStateType, {}: PayloadAction<ImageModel>) => {
      state.isLoading = true;
      state.error = '';
    },
    patchCategoryImageSuccessAction: (state: UpdateImageStateType, { payload: status }: PayloadAction<number>) => {
      state.isLoading = false;
      state.status = status;
    },
    patchCategoryImageErrorAction: (state: UpdateImageStateType,
      { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error;
    },

    resetCategoryImageStateAction: (state: UpdateImageStateType) => {
      state.status = '';
      state.error = '';
    },

  },
});

export const { patchCategoryImage, patchCategoryImageSuccessAction, patchCategoryImageErrorAction,
  resetCategoryImageStateAction } = editCategoryImageSlice.actions;
