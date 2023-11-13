import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  errorScreen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
