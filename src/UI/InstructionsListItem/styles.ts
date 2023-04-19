import {StyleSheet} from 'react-native/types';
import {Colors} from '../Colors';

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
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  listItemDescription: {
    color: Colors.text,
    marginBottom: 15,
    width: '100%',
  },
  listItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    tintColor: Colors.primary,
  },
  listItemImage: {
    width: '70%',
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
  },
});
