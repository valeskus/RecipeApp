import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';

import { Colors } from '../../Colors';

export const styles = StyleSheet.create({
  productGridContainer: {
    flex: 1,
    borderRadius: 20,
    height: 250,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    flexDirection: 'column',
    margin: 5,
    elevation: 8,
  },
  productCardGridImage: {
    width: '100%',
    height: 120,
    flex: 3,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 18,
    fontFamily: Fonts.primary,
    fontWeight: '700',
    color: Colors.primary,
    flex: 3,
  },
  productCardDetails: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  productCardDetailsItem: {
    fontSize: 15,
    fontFamily: Fonts.secondary,
    fontWeight: '400',
    color: Colors.text,
    maxWidth: '50%',
  },
  cardPressed: {
    transform: [{ scale: 0.9 }],
  },
  note: {
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: Fonts.secondary,
  },
  productCardDetailsItemBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 7,
    flex: 1,
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 3,
  },
});
