import * as React from 'react';
import * as Redux from 'react-redux';

import { setSearchOptions } from '../searchActions';
import { SearchOptionsModel } from '../searchReducer';

export const useSetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptionsModel) => {
      setSearchOptions(searchOptions, dispatch);
    },
    [dispatch],
  );
};
