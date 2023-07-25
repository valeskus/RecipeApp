import * as React from 'react';
import * as Redux from 'react-redux';

import { setSearch } from '../searchActions';
import { SearchOptions } from '../../../models';

export const useSetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptions) => {
      setSearch(searchOptions, dispatch);
    },
    [dispatch],
  );
};
