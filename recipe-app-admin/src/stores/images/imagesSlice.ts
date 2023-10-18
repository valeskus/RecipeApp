import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ImageListModel } from '../../models';
import { IMAGES, ImagesStateType } from '../types';

const imagesInitialState: ImagesStateType = {
  images: null,
  error: '',
  isLoading: false,
};

export const imagesSlice = createSlice({
  name: IMAGES,
  initialState: imagesInitialState,
  reducers: {
    getImages: (state: ImagesStateType) => {
      state.isLoading = true;
      state.error = '';
    },
    getImagesSuccessAction: (state: ImagesStateType,
      { payload: imagesArray }: PayloadAction<ImageListModel>) => {
      state.isLoading = false;

      state.images = imagesArray.images;

    },
    getImagesErrorAction: (state: ImagesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error.response?.data;
    },

  },
});

export const { getImages, getImagesSuccessAction, getImagesErrorAction } = imagesSlice.actions;
