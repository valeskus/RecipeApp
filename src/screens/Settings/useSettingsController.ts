import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { EventService } from '@services/EventService';

export const useSettingsController = () => {
    const navigation = useNavigation();

    const onPressLanguage = useCallback(() => {
        navigation.navigate('Language');
    }, []);

    const onPressInfo = useCallback(() => {
        navigation.navigate('Info');

    }, []);

    useEffect(() => {
        EventService.emit('view:settings');
    }, []);

    return {
        onPressLanguage,
        onPressInfo,
    };
};
