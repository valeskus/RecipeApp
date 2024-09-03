import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 18,
    color: Colors.background,
    fontFamily: 'Montserrat-Bold',
  },

  pressed: {
    transform: [{ scale: 0.96 }],
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
