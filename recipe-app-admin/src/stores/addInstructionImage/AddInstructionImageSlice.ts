import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AddInstructionImageStateType, IMAGE } from '../types';

const instructionImagesInitialState: AddInstructionImageStateType = {
  url: '',
  status: '',
  error: undefined,
  isLoading: false,
};

export const addInstructionImageSlice = createSlice({
  name: IMAGE,
  initialState: instructionImagesInitialState,
  reducers: {
    postInstructionImage: (state: AddInstructionImageStateType, { }: PayloadAction<FormData>) => {
      state.isLoading = true;
      state.error = undefined;
    },
    postInstructionImageSuccessAction: (state: AddInstructionImageStateType, { payload }: PayloadAction<{
      image: { url: string }; status: string;
    }>) => {
      state.isLoading = false;
      state.status = payload.status;
      state.url = payload.image.url;
    },
    postInstructionImageErrorAction: (state: AddInstructionImageStateType,
      { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error;
    },
    resetAddInstructionImageState: (state: AddInstructionImageStateType) => {
      state.status = '';
      state.url = '';
      state.error = undefined;
    },

  },
});

export const { postInstructionImage, postInstructionImageSuccessAction, postInstructionImageErrorAction,
  resetAddInstructionImageState } = addInstructionImageSlice.actions;
