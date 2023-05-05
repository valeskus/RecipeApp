import * as React from 'react';
import * as Redux from 'react-redux';
import {setSearchTerm} from '../searchActions';

//TODO types

export const useSearchTerm = () => {
  const dispatch = Redux.useDispatch();
  return React.useCallback(
    async (searchTerm: {}) => {
      await setSearchTerm(searchTerm, dispatch);
    },
    [dispatch],
  );
};
