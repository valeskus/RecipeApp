import { useEffect, useState } from 'react';

import { useInitCardType } from '@stores/recipes';

import { LanguageManager } from '@managers/LanguageManager';

export const useInitRequiredData = () => {
    const [isRequiredDataInitialized, setIsRequiredDataInitialized] = useState<boolean>(false);
    const initRecipeCardType = useInitCardType();

    useEffect(() => {
        initRecipeCardType();
        LanguageManager.initLanguage().then(() => setIsRequiredDataInitialized(true));
    }, []);

    return { isRequiredDataInitialized };
};
