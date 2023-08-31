import * as React from 'react';
import * as Redux from 'react-redux';

import { PaginateOptions, paginate } from '../searchActions';

export const usePagination = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (options: PaginateOptions) => {
      paginate(options, dispatch);
    },
    [dispatch],
  );
};
