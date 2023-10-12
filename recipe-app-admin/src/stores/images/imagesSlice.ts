import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ImageListModel } from '../../models';

import { IMAGES, ImagePostModel, ImagesStateType } from './types';

const imagesInitialState: ImagesStateType = {
  images: {
    data: null,
    error: '',
    isLoading: false,
  },
  create: {
    status: '',
    error: '',
    isLoading: false,
  },
  delete: {
    status: '',
    error: '',
    isLoading: false,
  },
};

export const imagesSlice = createSlice({
  name: IMAGES,
  initialState: imagesInitialState,
  reducers: {
    getImages: (state: ImagesStateType) => {
      state.images.isLoading = true;
      state.images.error = '';
    },
    getImagesSuccessAction: (state: ImagesStateType,
      { payload: imagesArray }: PayloadAction<ImageListModel>) => {
      state.images.isLoading = false;

      state.images.data = imagesArray.images;

    },
    getImagesErrorAction: (state: ImagesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.images.isLoading = false;
      state.images.error = error.response?.data;
    },

    postImage: (state: ImagesStateType, {}: PayloadAction<ImagePostModel>) => {
      state.create.isLoading = true;
      state.create.error = '';
    },
    postImageSuccessAction: (state: ImagesStateType, { payload: status }: PayloadAction<string>) => {
      state.create.isLoading = false;
      state.create.status = status;
    },
    postImageErrorAction: (state: ImagesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.create.isLoading = false;
      state.create.error = error.response?.data;
    },
    deleteImages: (state: ImagesStateType, {}: PayloadAction<{ id: string }>) => {
      state.delete.isLoading = true;
      state.delete.error = '';
    },
    deleteImagesSuccessAction: (state: ImagesStateType, { payload: status }: PayloadAction<string>) => {
      state.delete.isLoading = false;
      state.delete.status = status;
    },
    deleteImagesErrorAction: (state: ImagesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.delete.isLoading = false;
      state.delete.error = error.response?.data;
    },

  },
});

export const { getImages, getImagesSuccessAction, getImagesErrorAction,
  postImage, postImageSuccessAction, postImageErrorAction, deleteImages,
  deleteImagesSuccessAction, deleteImagesErrorAction } = imagesSlice.actions;
