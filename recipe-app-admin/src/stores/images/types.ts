
export type ImageCreateDeleteState = {
  status: string;
  error:  any ;
  isLoading: boolean;
};

export type ImagePostModel = {
  url: string;
};

export type ImagesModelState = {
  data: Array<ImagePostModel> | null;
  error: unknown | string;
  isLoading: boolean;
};

export type ImagesStateType = {
  images: ImagesModelState;
  create: ImageCreateDeleteState;
  delete: ImageCreateDeleteState;
};

export const IMAGES = 'images';
