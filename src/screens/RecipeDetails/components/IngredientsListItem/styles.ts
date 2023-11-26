import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  ingredientsListItemContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
  },
  ingredientsListItemContentContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: Colors.borderTextSecondary,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  ingredientsListItemContent: {
    flexDirection: 'column',
    flex: 1,
  },
  ingredientsListItemTitle: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  ingredientsListItemDescription: {
    color: Colors.borderTextSecondary,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  ingredientsListItemAmount: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  ingredientsListItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    marginRight: 5,
  },
});
