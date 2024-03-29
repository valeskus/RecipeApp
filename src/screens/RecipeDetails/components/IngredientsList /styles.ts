import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  ingredientsContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  itemsCounter: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.borderTextSecondary,
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 21,
    flex: 1,
    fontFamily: 'Nunito-Bold',
    color: Colors.text,
  },
});
