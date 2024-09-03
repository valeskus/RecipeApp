import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAddImageStore } from '../../../../stores/addImage/hooks';
import { useGetImages, useImagesStore } from '../../../../stores/images/hooks';

export const useImagesGalleryController = () => {
  const getImages = useGetImages();
  const dispatch = useDispatch();
  const { images, isLoading } = useImagesStore();
  const AddImageStore = useAddImageStore();

  useEffect(() => {
    getImages(dispatch);
  }, [AddImageStore]);

  const onCopyUrl = useCallback(async (imageUrl: string) => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      alert('Copied!');
    } catch (err) {
      alert('Failed to copy!');
    }
  }, []);

  return {
    images: images,
    isLoading,
    onCopyUrl,
  };
};
