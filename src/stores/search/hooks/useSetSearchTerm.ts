import * as React from 'react';
import * as Redux from 'react-redux';

import { setSearchTerm } from '../searchActions';

export const useSetSearchTerm = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm, dispatch);
    },
    [dispatch],
  );
};
