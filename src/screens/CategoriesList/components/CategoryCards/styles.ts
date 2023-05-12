import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryCardsContainer: {
    width: '100%',
    paddingBottom: 60,
    // justifyContent: 'center',
    justifyContent: 'space-between',
  },
  offset: {
    marginTop: -30,
    paddingTop: 30,
  },
  cardPlaceholder: {
    flex: 1,
  },
  loader: {
    alignSelf: 'center',
    flex: 1,
  },
});
