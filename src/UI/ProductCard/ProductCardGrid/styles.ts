import { StyleSheet } from 'react-native';

import { Colors } from '../../Colors';

export const styles = StyleSheet.create({
  productGridContainer: {
    flex: 1,
    borderRadius: 20,
    height: 230,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    flexDirection: 'column',
    margin: 10,
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
    transform: [{ scale: 0.9 }],
  },
});
