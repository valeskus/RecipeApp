import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  View,
  TextInput,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

import * as SearchStore from '../../stores/search';

export type Props = {
  onSearch: (e: string) => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function Search({onSearch, pressableStyle}: Props): JSX.Element {
  const {searchTerm} = SearchStore.useSearchStore();

  useEffect(() => {
    setSearchValue(searchTerm);
  }, [searchTerm]);
  const handleChange = useCallback((nextValue: string) => {
    if (!nextValue) {
      return setSearchValue(nextValue);
    }

    setSearchValue(nextValue);
  }, []);
  const handlePress = useCallback(() => {
    onSearch(searchValue);
  }, [onSearch, searchValue]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search"
        style={styles.searchBarInput}
        onChangeText={handleChange}
        value={searchValue}
      />
      <Pressable
        onPress={handlePress}
        style={({pressed}) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
          pressableStyle,
        ]}
        disabled={!searchValue}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </View>
  );
}
