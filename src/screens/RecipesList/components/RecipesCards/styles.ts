import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  recipesCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 100,
  },
  offset: {
    marginTop: -80,
    paddingTop: 80,
  },

  centeredLineCard: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  loadingIndicator: {
    marginVertical: 18,
  },
});
