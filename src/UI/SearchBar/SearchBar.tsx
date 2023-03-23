import React from 'react';
import {Image, StyleSheet, View, TextInput} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

export type Props = {
  text: string;
};

export function SearchBar(): JSX.Element {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput placeholder="Search" style={styles.searchBarInput} />
      <Image source={Icons.search} style={styles.searchBarIcon} />
    </View>
  );
}
const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 20,
    width: 350,
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    fontSize: 17,
    padding: 15,
    paddingRight: 50,
    margin: 20,
  },
  searchBarInput: {
    fontSize: 17,
  },
  searchBarIcon: {
    width: 27,
    height: 27,
    position: 'absolute',
    right: 20,
    top: 10,
  },
});
