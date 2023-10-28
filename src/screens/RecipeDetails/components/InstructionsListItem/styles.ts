import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { Fonts } from '@UI/Fonts';

export const styles = StyleSheet.create({
  ingredientsListItemContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
  },
  listItemContentContainer: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: Colors.borderTextSecondary,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  listItemCount: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '600',
  fontFamily: Fonts.secondary,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  listItemDescription: {
    color: Colors.text,
    fontWeight: '400',
  fontFamily: Fonts.secondary,
    marginBottom: 15,
    width: '100%',
  },
  listItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    tintColor: Colors.primary,
    marginRight: 10,
  },
  listItemImage: {
    width: '70%',
    height: 150,
    marginBottom: 15,
    borderRadius: 15,
  },
});
