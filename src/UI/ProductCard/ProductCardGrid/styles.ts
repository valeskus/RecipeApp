import { StyleSheet } from 'react-native';

import { normalize } from '@UI/normalize';

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
    marginVertical: 5,
    marginHorizontal: '2%',
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
    fontFamily: 'Nunito-Extrabold',
    color: Colors.primary,
  },
  productCardDetails: {
    flex: 2,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  productCardDetailsItem: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    color: Colors.text,
    width: '85%',
  },
  productCardDetailsItemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  cardPressed: {
    transform: [{ scale: 0.96 }],
  },
  note: {
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',

  },
  productCardDetailsItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,

  },
  productCardTimeContainer: {
    marginBottom: 7,
  },

  icon: {
    width: normalize(17),
    height: normalize(17),
    marginRight: 3,
  },
});
