import * as React from 'react';
import * as Redux from 'react-redux';

import { SearchOptionsModel, setPendingSearchOptions } from '../searchActions';

export const useSetPendingSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (searchOptions: SearchOptionsModel) => {
      setPendingSearchOptions(searchOptions, dispatch);
    },
    [dispatch],
  );
};
