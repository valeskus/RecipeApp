import { StyleSheet } from 'react-native';

import { normalize } from '@UI/normalize';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  buttonContent: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: 'Montserrat-Bold',
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
  button: {
    borderRadius: 50,
    width: normalize(25),
    height: normalize(25),
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    position: 'relative',
    alignItems: 'center',
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
    fontFamily: 'Montserrat-Semibold',
    color: Colors.primary,
    marginHorizontal: 10,
    minWidth: normalize(25),
    textAlign: 'center',
  },
});
