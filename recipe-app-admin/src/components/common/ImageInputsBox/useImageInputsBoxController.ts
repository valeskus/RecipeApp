import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useImagesStore } from '../../../stores/images/hooks';
import { postImage } from '../../../stores/images/imagesSlice';
import { postInstructionImage, postRecipeImage } from '../../../stores/recipe/recipeSlice';
import { useRecipesStore } from '../../../stores/recipe/hooks';

export interface ImageInputsControllerParams {
  component: 'recipe' | 'instruction' | 'image';
  image: string;
  onChange: (image: string) => void;
}

export const useImageInputsController = (params: ImageInputsControllerParams) => {
  const [image, setImage] = useState<string>(params.image);
  const [imageStatus, setImageStatus] = useState<string>('');

  const ImagesStore = useImagesStore();
  const RecipesStore = useRecipesStore();

  const dispatch = useDispatch();

  const chooseAction = useCallback((data: FormData) => {
    switch (params.component) {
      case 'recipe': return dispatch(postRecipeImage(data));
      case 'instruction': return dispatch(postInstructionImage(data));
      case 'image': return dispatch(postImage(data));
    }
  }, [params.component]);

  useEffect(() => {
    if (params.component !== 'image') {
      return;
    }

    if (!ImagesStore.create.url) {
      return;
    }

    if (ImagesStore.create.url) {
      setImage(ImagesStore.create.url);
      params. onChange(ImagesStore.create.url);
      setImageStatus('Uploaded');
    }

    if (ImagesStore.create.error) {
      setImageStatus(ImagesStore.create.error.message);
    }
  }, [params.component, ImagesStore.create.url, ImagesStore.create.error]);

  useEffect(() => {
    if (params.component !== 'recipe') {
      return;
    }

    if (!RecipesStore.recipeImage.url) {
      return;
    }

    if (RecipesStore.recipeImage.url) {
      setImage(RecipesStore.recipeImage.url);
      params. onChange(RecipesStore.recipeImage.url);
      setImageStatus('Uploaded');
    }

    if (RecipesStore.recipeImage.error) {
      setImageStatus(RecipesStore.recipeImage.error.toString());
    }

  }, [params.component, RecipesStore.recipeImage]);

  useEffect(() => {
    if (params.component !== 'instruction') {
      return;
    }

    if (!RecipesStore.instructionImage.url) {
      return;
    }

    if (RecipesStore.instructionImage.url) {
      // setImage(RecipesStore.instructionImage.url);
      params. onChange(RecipesStore.instructionImage.url);
      setImageStatus('Uploaded');
    }

    if (RecipesStore.instructionImage.error) {
      setImageStatus(RecipesStore.instructionImage.error.toString());
    }

  }, [params.component, RecipesStore.instructionImage]);

  useEffect(() => {

    setImage(params.image);
    if (!params.image) {
      setImageStatus('');
    }
  }, [params.image]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
    params. onChange(value);
  }, [setImage]);

  const handleImageFile = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    let formData = new FormData();
    formData.append('image', e.target.files[0]);
    chooseAction(formData);
    setImageStatus('pending...');

  }, []);

  return {
    image, handleImage, handleImageFile, imageStatus,
  };
};
