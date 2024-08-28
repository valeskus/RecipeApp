import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({

    buttonImage: {
        width: '70%',
        height: '70%',
    },
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
});
