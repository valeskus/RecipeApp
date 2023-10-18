import { ImageModel } from '../../models';

export type ImagesStateType = {
  images: Array<ImageModel> | null;
  error:  any ;
  isLoading: boolean;
};

export const IMAGES = 'images';
