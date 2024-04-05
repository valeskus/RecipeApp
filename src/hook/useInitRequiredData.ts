import { useEffect, useState } from 'react';

import { useSetCardType } from '@stores/recipes/hooks/useSetCardType';

import { RecipesCardTypeManager } from '@managers/RecipesCardTypeManager';
import { LanguageManager } from '@managers/LanguageManager';

export const useInitRequiredData = () => {
    const [isRequiredDataInitialized, setIsRequiredDataInitialized] = useState<boolean>(false);
    const initRecipeCardType = useSetCardType();

    useEffect(() => {
        RecipesCardTypeManager.initCardType().then((type) => initRecipeCardType(type));
        LanguageManager.initLanguage().then(() => setIsRequiredDataInitialized(true));
    }, []);

    return { isRequiredDataInitialized };
};
