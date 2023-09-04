import * as React from 'react';
import * as Redux from 'react-redux';

import { SearchOptionsModel, setSearchOptions } from '../searchActions';

export const useSetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptionsModel) => {
      setSearchOptions(searchOptions, dispatch);
    },
    [dispatch],
  );
};
