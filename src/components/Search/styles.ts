import { StyleSheet } from 'react-native';

import { Colors } from '@UI/Colors';
import { Fonts } from '@UI/Fonts';

export const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 20,
    width: '100%',
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    fontSize: 15,
    padding: 13,
    paddingRight: 62,
    margin: 10,
  },
  searchBarInput: {
    fontSize: 15,
    fontFamily: Fonts.secondary,
    padding: 0,
    color: Colors.text,
    width: '100%',
  },
  searchBarIcon: {
    width: 27,
    height: 27,
    marginVertical: 7,
    marginHorizontal: 5,
  },
  resetSearchIcon: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    marginVertical: 20,
  },
  searchBarIconContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  resetSearchIconContainer: {
    position: 'absolute',
    right: 42,
    top: 0,
  },
  searchPress: {
    transform: [{ scale: 0.9 }],
  },
});
