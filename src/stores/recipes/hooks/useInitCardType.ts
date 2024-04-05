import * as React from 'react';
import * as Redux from 'react-redux';

import { initCardType } from '../recipesActions';

export const useInitCardType = () => {
    const dispatch = Redux.useDispatch();

    return React.useCallback(() => {
       return initCardType(dispatch);
    },
        [dispatch],
    );
};
