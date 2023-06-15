import { StyleSheet } from 'react-native';

import { Colors } from '../../../../UI/Colors';

export const styles = StyleSheet.create({
  errorScreen: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
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
    fontWeight: '600',
  },

  message: {
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 20,
  },

  buttonTitle: {
    fontSize: 18,
    color: Colors.background,
    fontWeight: '600',
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
