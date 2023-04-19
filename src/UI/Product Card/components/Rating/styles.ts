import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native/types';

export const styles = StyleSheet.create({
  productCardRaitingItem: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 10,
  },
  productCardRaitingContainer: {
    width: 100,
    height: 20,
    flexDirection: 'row',
    marginBottom: 3,
    backgroundColor: Colors.tertiary,
    position: 'relative',
  },
  raitingWraper: {
    height: 20,
    backgroundColor: Colors.rating,
  },
});
