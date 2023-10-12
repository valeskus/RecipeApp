import { ImageModel } from '../../models';

export type ImageCreateState = {
  status: string;
  url: string;
  error:  any ;
  isLoading: boolean;
};

export type ImageDeleteState = {
  status: string;
  error:  any ;
  isLoading: boolean;
};

export type ImagesModelState = {
  data: Array<ImageModel> | null;
  error: unknown | string;
  isLoading: boolean;
};

export type ImagesStateType = {
  images: ImagesModelState;
  create: ImageCreateState;
  delete: ImageDeleteState;
};

export const IMAGES = 'images';
