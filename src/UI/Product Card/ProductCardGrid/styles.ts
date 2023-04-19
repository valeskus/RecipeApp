import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native/types';

export const styles = StyleSheet.create({
  productGridContainer: {
    borderRadius: 20,
    width: '45%',
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 9,
    elevation: 8,
  },
  productCardGridImage: {
    width: '100%',
    height: 120,
    flex: 3,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 18,
    color: Colors.primary,
  },
  productCardDetails: {
    flex: 2,
    padding: 10,
  },
  productCardDetailsItem: {
    fontSize: 15,
    color: Colors.text,
  },
  cardPressed: {
    transform: [{scale: 0.9}],
  },
});
