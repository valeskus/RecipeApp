import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';

import { Colors } from '../../Colors';

export const styles = StyleSheet.create({
  productGridContainer: {
    flex: 1,
    borderRadius: 20,
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
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 10,
    fontSize: 19,
    fontFamily: Fonts.primary,
    fontWeight: '800',
    color: Colors.primary,
  },
  productCardDetails: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  productCardDetailsItem: {
    fontSize: 16,
    fontFamily: Fonts.secondary,
    fontWeight: '400',
    color: Colors.text,
    maxWidth: '50%',
  },
  productCardDetailsItemContainer: {
    flex: 1,
     justifyContent: 'flex-end',
  },
  cardPressed: {
    transform: [{ scale: 0.9 }],
  },
  note: {
    color: Colors.secondary,
    fontSize: 14,
    fontFamily: Fonts.secondary,
  },
  productCardDetailsItemBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 7,
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 3,
  },
});
