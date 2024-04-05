import * as React from 'react';
import * as Redux from 'react-redux';

import { setCardType } from '../recipesActions';

export const useSetCardType = () => {
    const dispatch = Redux.useDispatch();

    return React.useCallback(
        (cardType:  'grid' | 'linear') => {
            setCardType(cardType, dispatch);
        },
        [dispatch],
    );
};
