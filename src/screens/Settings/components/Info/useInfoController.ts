import { useCallback } from 'react';
import { Linking } from 'react-native';

export const useInfoController = () => {
    const link = 'https://www.usda.gov';
    const onPress = useCallback(() => {
        Linking.openURL('https://www.usda.gov');
    }, []);

    return {
        onPress,
        link,
    };
};
