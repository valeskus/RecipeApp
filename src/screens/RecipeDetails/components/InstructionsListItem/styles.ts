import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

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
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  listItemDescription: {
    color: Colors.text,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 15,
    width: '100%',
  },
  listItemDot: {
    width: 20,
    height: 20,
    marginRight: 5,
    top: 2,
    tintColor: Colors.primary,
  },
  listItemImage: {
    width: '80%',
    height: 150,
    marginBottom: 15,
    borderRadius: 15,
  },
});
