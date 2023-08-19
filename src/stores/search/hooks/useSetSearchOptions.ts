import * as React from 'react';
import * as Redux from 'react-redux';

import { setSearchOptions } from '../searchActions';

import { SearchOptionsModel } from 'src/models';

export const useSetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptionsModel) => {
      setSearchOptions(searchOptions, dispatch);
    },
    [dispatch],
  );
};
