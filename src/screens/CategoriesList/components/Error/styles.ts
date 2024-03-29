import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  errorScreen: {
    flex: 2,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 27,
    color: Colors.accent,
    marginBottom: 10,
    fontFamily: 'Nunito-Extrabold',
  },

  message: {
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 20,
    fontFamily: 'Montserrat-Medium',
  },
});
