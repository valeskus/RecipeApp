import { StyleSheet } from 'react-native';

import { Colors } from '../Colors';

export const styles = StyleSheet.create({
  categoryCardImage: {
    width: '100%',
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    aspectRatio: 1,
  },
  categoryContainer: {
    borderRadius: 20,
    flex: 1,
    minHeight: 185,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: '2%',
  },
  categoryCardTitle: {
    margin: 6,
    marginLeft: 12,
    fontSize: 18,
    fontFamily: 'Nunito-Extrabold',
    color: Colors.primary,
  },

  cardPressed: {
    transform: [{ scale: 0.96 }],
  },
});
