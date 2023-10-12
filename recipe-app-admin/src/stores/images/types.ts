import { ImageModel } from '../../models';

export type ImageCreateDeleteState = {
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
  create: ImageCreateDeleteState;
  delete: ImageCreateDeleteState;
};

export const IMAGES = 'images';
