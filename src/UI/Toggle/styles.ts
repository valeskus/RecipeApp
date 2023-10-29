import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';

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
    paddingVertical: 21,
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
    fontWeight: '400',
    fontSize: 15,
    fontFamily: Fonts.secondary,
  },
  activeTitle: {
    color: Colors.background,
    fontWeight: '600',
    fontFamily: Fonts.secondary,
  },
  moveRight: {
    left: '33%',
  },
  activeItemWrap: {
    width: '100%',
    position: 'absolute',
  },
});
