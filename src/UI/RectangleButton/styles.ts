import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 18,
    color: Colors.background,
    fontWeight: '700',
    fontFamily: 'Montserrat',
  },

  pressed: {
    transform: [{ scale: 0.9 }],
  },

  button: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: Colors.secondary,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'center',
  },

});
