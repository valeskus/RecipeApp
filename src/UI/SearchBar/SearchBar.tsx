import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

export type Props = {
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function SearchBar({onPress, pressableStyle}: Props): JSX.Element {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput placeholder="Search" style={styles.searchBarInput} />
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
          pressableStyle,
        ]}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
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
  },
  searchBarIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  searchPress: {
    transform: [{scale: 0.9}],
  },
});
