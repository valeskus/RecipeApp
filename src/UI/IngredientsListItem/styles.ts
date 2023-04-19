import {StyleSheet} from 'react-native/types';
import {Colors} from '../Colors';

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
    alignSelf: 'flex-start',
  },
  ingredientsListItemDescription: {
    color: Colors.borderTextSecondary,
  },
  ingredientsListItemCount: {
    color: Colors.text,
    fontSize: 18,
  },
  ingredientsListItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
});
