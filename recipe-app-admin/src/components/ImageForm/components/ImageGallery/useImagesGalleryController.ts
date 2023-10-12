import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useGetImages, useImagesStore } from '../../../../stores/images/hooks';

export const useImagesGalleryController = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const getImages = useGetImages();
  const dispatch = useDispatch();
  const { images } = useImagesStore();

  useEffect(() => {
    getImages(dispatch);
  }, []);

  const onCopyUrl = useCallback(async (imageUrl: string) => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  }, []);

  return {
    images: images.data,
    isLoading: images.isLoading,
    onCopyUrl,
    copySuccess,
  };
};
