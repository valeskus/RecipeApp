import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    buttonPressed: {
        transform: [{ scale: 0.9 }],
    },
    buttonImage: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    button: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        position: 'absolute',
        left: 10,
        zIndex: 10,
    },
});
