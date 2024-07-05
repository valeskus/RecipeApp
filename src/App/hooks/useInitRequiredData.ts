import { useEffect, useState } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

import { useInitCardType } from '@stores/recipes';

import { clientInitApiUrl } from '@api/client.api';

import { LanguageManager } from '@managers/LanguageManager';

import { EventService } from '@services/EventService';

export const useInitRequiredData = () => {
    const [isRequiredDataInitialized, setIsRequiredDataInitialized] = useState<boolean>(false);
    const initRecipeCardType = useInitCardType();

    useEffect(() => {
        Promise.all([remoteConfig().fetchAndActivate(), initRecipeCardType(), LanguageManager.initLanguage()])
            .then(() => {
                clientInitApiUrl();

                setIsRequiredDataInitialized(true);
            })
            .catch((error) =>
                EventService.emit('app:error', {
                    moduleName: 'useInitRequiredData',
                    error,
                }));
    }, []);

    return { isRequiredDataInitialized };
};
