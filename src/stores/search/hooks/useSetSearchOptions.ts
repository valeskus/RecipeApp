import * as React from 'react';
import * as Redux from 'react-redux';

import { SearchOptions } from '@api/recipes.api';

import { setSearch } from '../searchActions';

export const useSetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptions) => {
      setSearch(searchOptions, dispatch);
    },
    [dispatch],
  );
};
