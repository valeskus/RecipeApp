import { StyleSheet } from 'react-native';

import { normalize } from '@UI/normalize';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  buttonContent: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },

  minus: {
    paddingBottom: 2,
  },

  buttonPressed: {
    transform: [{ scale: 0.96 }],
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
    justifyContent: 'center',
    position: 'relative',
  },
  counterContainer: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    right: 15,
    top: 13,
    alignItems: 'center',
  },
  countInput: {
    fontSize: 20,
    fontFamily: 'Montserrat-Semibold',
    color: Colors.primary,
    marginHorizontal: 10,
    minWidth: normalize(41),
    textAlign: 'center',
  },
  buttonImage: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
});
