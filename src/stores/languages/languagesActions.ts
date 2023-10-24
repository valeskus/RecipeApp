import { Dispatch } from 'redux';

import { changeLanguage } from '@api/client.api';

export enum LanguagesActions {
    SET = '@languages/get',
}

const actionSetLanguages = (payload: 'ua'|'en') => ({
    type: LanguagesActions.SET,
    payload: { language: payload },
});
export const setLanguage = (language:  'ua'|'en', dispatch: Dispatch) => {
        changeLanguage(language);
        dispatch(actionSetLanguages(language));
};
