import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { AddImagesStateType, IMAGE } from '../types';

const imagesInitialState: AddImagesStateType = {
  url: '',
  status: '',
  error: undefined,
  isLoading: false,
};

export const addImagesSlice = createSlice({
  name: IMAGE,
  initialState: imagesInitialState,
  reducers: {
    postImage: (state: AddImagesStateType, { }: PayloadAction<FormData>) => {
      state.isLoading = true;
      state.error = undefined;
    },
    postImageSuccessAction: (state: AddImagesStateType, { payload }: PayloadAction<{
      image: { url: string }; status: string;
    }>) => {
      state.isLoading = false;
      state.status = payload.status;
      state.url = payload.image.url;
    },
    postImageErrorAction: (state: AddImagesStateType, { payload: error }: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = error;
    },
    resetAddImageState: (state: AddImagesStateType) => {
      state.status = '';
      state.url = '';
      state.error = undefined;
    },

  },
});

export const { postImage, postImageSuccessAction, postImageErrorAction, resetAddImageState } = addImagesSlice.actions;
