import * as React from 'react';
import * as Redux from 'react-redux';

import { PaginateOptions } from '../searchActions';
import { setSearchOptions } from '../searchActions';

export const PAGE_SIZE = 10;

export const usePagination = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (options: PaginateOptions) => {

      if (options.arrayLength === options.total) {
        return;
      }

      const offset = options.offset + PAGE_SIZE;

      setSearchOptions({ offset }, dispatch);
    },
    [dispatch],
  );
};
