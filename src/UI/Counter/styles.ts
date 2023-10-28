import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  buttonContent: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
  button: {
    borderRadius: 50,
    width: 25,
    height: 25,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    position: 'relative',
  },
  counterContainer: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    right: '15%',
    top: 20,
  },
  count: {
    fontSize: 20,
  fontFamily: Fonts.secondary,
    fontWeight: '600',
    color: Colors.primary,
    marginHorizontal: 15,
  },
});
