import { StyleSheet } from 'react-native';

import { Colors } from '../../../Colors';

export const styles = StyleSheet.create({
  productCardRatingItem: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 10,
  },
  productCardRatingContainer: {
    width: 100,
    height: 20,
    flexDirection: 'row',
    marginBottom: 3,
    backgroundColor: Colors.tertiary,
    position: 'relative',
  },
  ratingWrapper: {
    height: 20,
    backgroundColor: Colors.rating,
  },
});
