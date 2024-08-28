import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { EventService } from '@services/EventService';

export const useSettingsController = () => {
const navigation = useNavigation();

    const onPressLanguage = useCallback(() => {
        navigation.navigate('LanguageScreen');
    }, []);

    const onPressInfo = useCallback(() => {
        navigation.navigate('InfoScreen');

    }, []);

    useEffect(() => {
        EventService.emit('view:settings');
    }, []);

    return {
        onPressLanguage,
        onPressInfo,
    };
};
