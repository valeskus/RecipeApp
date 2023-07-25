import * as React from 'react';
import * as Redux from 'react-redux';

import { SearchOptions } from '@api/recipes.api';

import { setSearchOptions } from '../searchActions';

export const useSetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptions) => {
      setSearchOptions(searchOptions, dispatch);
    },
    [dispatch],
  );
};
