import * as React from 'react';
import * as Redux from 'react-redux';
import {setSearchTerm} from '../searchActions';

export const useSearchTerm = () => {
  const dispatch = Redux.useDispatch();
  return React.useCallback(
    async (searchTerm: string) => {
      await setSearchTerm(searchTerm, dispatch);
    },
    [dispatch],
  );
};
