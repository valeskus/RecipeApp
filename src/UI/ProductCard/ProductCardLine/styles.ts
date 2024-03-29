import { StyleSheet } from 'react-native';

import { normalize } from '@UI/normalize';

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
    height: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 19,
    fontFamily: 'Nunito-Extrabold',
    color: Colors.primary,
    flex: 1,
    minHeight: 50,
  },
  productCardDetails: {
    flex: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productCardLineDetailsItem: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: Colors.text,
  },
  cardPressed: {
    transform: [{ scale: 0.96 }],
  },
  productCardLineItem: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  icon: {
    width: normalize(17),
    height: normalize(17),
    marginRight: 3,
  },
  note: {
    color: Colors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
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
