import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { normalize } from '@UI/normalize';

export const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        marginLeft: 15,
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: Colors.text,
    },
    active: {
        color: Colors.primary,
    },
    buttonImage: {
        width: normalize(30),
        height: normalize(30),
        alignSelf: 'center',
    },
    iconActive: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        position: 'absolute',
    },
    buttonPressed: {
        transform: [{ scale: 0.96 }],
    },
    itemBackground: {
        borderRadius: 50,
        width: normalize(48),
        height: normalize(48),
        backgroundColor: Colors.background,
        shadowColor: Colors.shadow,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 8,
        justifyContent: 'center',
        position: 'relative',
        margin: 8,
    },
});
