import React from 'react';
import {Image, TextInput, Pressable, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles';
import {Icons} from '../../UI/Icons';

import {useSearchController} from './hooks';

export type Props = {
  onSearch: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function Search({onSearch, pressableStyle}: Props): JSX.Element {
  const {
    searchTerm,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    hendlePress,
  } = useSearchController(onSearch);
  return (
    <Pressable style={styles.searchBarContainer} onPress={hendlePress}>
      <TextInput
        placeholder="Search"
        style={styles.searchBarInput}
        onChangeText={handleChange}
        value={searchTerm}
        ref={searchInputRef}
      />
      {searchTerm && (
        <Pressable
          onPress={handleResetSearchInput}
          style={({pressed}) => [
            styles.resetSearchIconContainer,
            pressed && styles.searchPress,
            pressableStyle,
          ]}
          disabled={!searchTerm}>
          <Image source={Icons.cancel} style={styles.resetSearchIcon} />
        </Pressable>
      )}

      <Pressable
        onPress={handleSearch}
        style={({pressed}) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
          pressableStyle,
        ]}
        disabled={!searchTerm}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </Pressable>
  );
}
