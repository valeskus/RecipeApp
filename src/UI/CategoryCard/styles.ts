import { StyleSheet } from 'react-native';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  categoryCardImage: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  categoryContainer: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  categoryCardTitle: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },

  cardPressed: {
    transform: [{ scale: 0.9 }],
  },
});
