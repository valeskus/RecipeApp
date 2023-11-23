import * as React from 'react';
import { Dispatch } from 'redux';

import { getImages } from '../imagesSlice';

export const useGetImages = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(getImages());
  }, []);
};
