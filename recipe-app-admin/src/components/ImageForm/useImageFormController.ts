import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { postImage } from '../../stores/addImage/AddImageSlice';
import { useAddImageStore } from '../../stores/addImage/hooks';
import { useResetAddImageState } from '../../stores/addImage/hooks';

export const useImageFormController = () => {
  const [imageData, setImageData] = useState <Array<FormData>>([]);
  const [status, setStatus] = useState<string>('');

  const dispatch = useDispatch();

  const AddImageStore = useAddImageStore();

  const reset = useResetAddImageState();

  const onSend = useCallback(() => {
    setStatus('');
    if (!imageData) {
      return;
    }

    imageData.map((data: FormData) => {
      dispatch(postImage(data));

      return;
    });
  }, [imageData]);

  const handleChange = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const formDataArray: Array<FormData> = [];
    Object.values(e.target.files).map((file: any) => {
      let formData = new FormData();
      formData.append('image', file);
      formDataArray.push(formData);

      return;
    });
    setImageData(formDataArray);

  }, [imageData]);

  useEffect(() => {
    if (AddImageStore.status === 'Created') {
      setStatus('Created successful!');
      setImageData([]);
    }

    if (AddImageStore.error) {
      setStatus(AddImageStore.error.message);
    }
  }, [AddImageStore.status, AddImageStore.error]);

  useEffect(() => {
    return () => {
      reset(dispatch);
    };
  }, []);

  return {
    status,
    onSend,
    handleChange,
  };
};
