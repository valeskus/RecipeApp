import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  recipesCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 100,
    justifyContent: 'center',
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
});
