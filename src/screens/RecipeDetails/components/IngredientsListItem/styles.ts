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
    fontWeight: '500',
    fontFamily: 'Montserrat',
    alignSelf: 'flex-start',
  },
  ingredientsListItemDescription: {
    color: Colors.borderTextSecondary,
    fontSize: 14,
  },
  ingredientsListItemAmount: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  ingredientsListItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    marginRight: 10,
  },
});
