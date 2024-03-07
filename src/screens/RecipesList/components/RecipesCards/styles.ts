import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  recipesCardsContainer: {
    width: '100%',
    paddingBottom: 100,
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  offset: {
    marginTop: -80,
    paddingTop: 80,
  },
  centeredLineCard: {
    paddingHorizontal: '4%',
  },
  loadingIndicator: {
    marginVertical: 18,
  },
  cardPlaceholder: {
    flex: 1,
    margin: 5,
  },
});
