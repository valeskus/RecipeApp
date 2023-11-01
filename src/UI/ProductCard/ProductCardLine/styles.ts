import { StyleSheet } from 'react-native';

import { Fonts } from '@UI/Fonts';

import { Colors } from '../../Colors';

export const styles = StyleSheet.create({
  productCardLineContainer: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  productCardLineImage: {
    flex: 2,
    height: 120,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 19,
    fontFamily: Fonts.primary,
    fontWeight: '800',
    color: Colors.primary,
    flex: 1,
  },
  productCardDetails: {
    flex: 2,
    padding: 10,
  },
  productCardLineDetailsItem: {
    fontSize: 16,
    fontFamily: Fonts.secondary,
    fontWeight: '400',
    color: Colors.text,
    maxWidth: '50%',
  },
  cardPressed: {
    transform: [{ scale: 0.9 }],
  },
  productCardLineItem: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 3,
  },
  note: {
    color: Colors.secondary,
    fontSize: 14,
    fontFamily: Fonts.secondary,
    fontWeight: '300',
  },
  productCardDetailsItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  productCardDetailsItemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
