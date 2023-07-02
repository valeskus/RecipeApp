import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  recipesCardsContainer: {
    width: '100%',
    paddingBottom: 100,
    justifyContent: 'space-between',
  },
  offset: {
    marginTop: -80,
    paddingTop: 80,
  },
  centeredLineCard: {
    justifyContent: 'center',
    paddingHorizontal: '2%',
  },
  loadingIndicator: {
    marginVertical: 18,
  },
  cardPlaceholder: {
    flex: 1,
    margin: 10,
  },
});
