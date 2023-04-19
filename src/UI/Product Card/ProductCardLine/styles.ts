import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native/types';

export const styles = StyleSheet.create({
  productCardLineContainer: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 8,
  },
  productCardLineImage: {
    flex: 2,
    height: 120,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 18,
    color: Colors.primary,
    flex: 1,
  },
  productCardDetails: {
    flex: 2,
    padding: 10,
  },
  productCardLineDetailsItem: {
    fontSize: 15,
    color: Colors.text,
    marginRight: 10,
  },
  cardPressed: {
    transform: [{scale: 0.9}],
  },
  productCardLineItem: {
    flexDirection: 'row',
    flex: 1,
  },
});
