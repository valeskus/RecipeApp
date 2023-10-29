import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  categoryCardImage: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  categoryContainer: {
    borderRadius: 20,
    flex: 1,
    minHeight: 185,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 5,
  },
  categoryCardTitle: {
    margin: 6,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: Fonts.primary,
    color: Colors.primary,
  },

  cardPressed: {
    transform: [{ scale: 0.9 }],
  },
});
