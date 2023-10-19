import { Dispatch } from 'redux';

import { changeLanguage } from '@api/client.api';

export enum LanguagesActions {
    SET = '@languages/get',
}

const actionSetLanguages = (payload: string) => ({
    type: LanguagesActions.SET,
    payload,
});
export const setLanguage = (language: string, dispatch: Dispatch) => {
        changeLanguage(language);
        dispatch(actionSetLanguages(language));
};
