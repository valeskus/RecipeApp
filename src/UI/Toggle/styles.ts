import { StyleSheet } from 'react-native';

import { normalize } from '@UI/normalize';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: Colors.tertiary,
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectButton: {
    flex: 1,
    paddingVertical: 10,
  },
  selectItemActive: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    zIndex: 10,
    paddingVertical: normalize(15) + 6,
  },
  selectItem: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 10,
  },
  selectItemTitle: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: Colors.text,
  },
  activeTitle: {
    color: Colors.background,
    fontFamily: 'Montserrat-Semibold',
  },
  moveRight: {
    left: '33%',
  },
  activeItemWrap: {
    width: '100%',
    position: 'absolute',
  },
});
