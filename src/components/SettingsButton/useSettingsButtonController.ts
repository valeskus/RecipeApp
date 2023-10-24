import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useSettingsButtonController = () => {
    const navigation = useNavigation();
    const onPressSetting = useCallback(() => {
        navigation.navigate('Settings');
    }, []);

    return {
        onPressSetting,
    };

};
