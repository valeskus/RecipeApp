import * as React from 'react';
import * as Redux from 'react-redux';
import {setSearchTerm} from '../searchActions';
import {SearchTermModel} from '../../../models';

export const useSearchTerm = () => {
  const dispatch = Redux.useDispatch();
  return React.useCallback(
    async (searchTerm: SearchTermModel) => {
      await setSearchTerm(searchTerm, dispatch);
    },
    [dispatch],
  );
};
