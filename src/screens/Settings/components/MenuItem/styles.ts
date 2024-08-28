import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({
    pressed: {
        transform: [{ scale: 0.96 }],
    },

    container: {
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        backgroundColor: Colors.background,
        shadowColor: Colors.shadow,
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 8,
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        width: normalize(30),
        height: normalize(30),
        alignSelf: 'flex-start',
    },

    label: {
        marginLeft: 18,
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: Colors.text,
    },
});
