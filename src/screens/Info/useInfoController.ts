import { useCallback, useEffect } from 'react';
import { Linking } from 'react-native';

import { EventService } from '@services/EventService';

export const useInfoController = () => {
    const link = 'https://www.usda.gov';
    const onPress = useCallback(() => {
        Linking.openURL(link);
    }, [link]);

    useEffect(() => {
        EventService.emit('view:info');
    }, []);

    return {
        onPress,
        link,
    };
};
