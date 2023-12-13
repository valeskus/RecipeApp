import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AddImagesStateType, IMAGE } from '../types';

const imagesInitialState: AddImagesStateType = {
  url: '',
  status: '',
  error: '',
  isLoading: false,
};

export const addImagesSlice = createSlice({
  name: IMAGE,
  initialState: imagesInitialState,
  reducers: {
    postImage: (state: AddImagesStateType, {}: PayloadAction<FormData>) => {
      state.isLoading = true;
      state.error = '';
    },
    postImageSuccessAction: (state: AddImagesStateType, { payload }: PayloadAction<{
      image: { url: string }; status: string; }>) => {
      state.isLoading = false;
      state.status = payload.status;
      state.url = payload.image.url;
    },
    postImageErrorAction: (state: AddImagesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error.message;
    },
    resetAddImageState: (state: AddImagesStateType) => {
      state.status = '';
      state.url = '';
      state.error = '';
    },

  },
});

export const {  postImage, postImageSuccessAction, postImageErrorAction, resetAddImageState } = addImagesSlice.actions;
