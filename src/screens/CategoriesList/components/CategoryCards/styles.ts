import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';

export const styles = StyleSheet.create({
  categoryCardsContainer: {
    width: '100%',
    paddingBottom: 60,
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
  },
  offset: {
    marginTop: -30,
    paddingTop: 30,
  },
  cardPlaceholder: {
    flex: 1,
    margin: 10,
  },
  loader: {
    alignSelf: 'center',
    flex: 1,
  },
});
