import * as React from 'react';
import * as Redux from 'react-redux';

import { setLanguage } from '../languagesActions';

export const useSetLanguage = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback((language: 'ua' | 'en') => {
    setLanguage(language, dispatch);
  }, [dispatch]);
};
