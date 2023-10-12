import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGetImages, useImagesStore } from '../../../../stores/images/hooks';

export const useImagesGalleryController = () => {
  const getImages = useGetImages();
  const dispatch = useDispatch();
  const { images, create } = useImagesStore();

  useEffect(() => {
    getImages(dispatch);
  }, [create]);

  const onCopyUrl = useCallback(async (imageUrl: string) => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      alert('Copied!');
    } catch (err) {
      alert('Failed to copy!');
    }
  }, []);

  return {
    images: images.data,
    isLoading: images.isLoading,
    onCopyUrl,
  };
};
