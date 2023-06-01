import React from 'react';
import {Image, TextInput, Pressable} from 'react-native';
import {styles} from './styles';
import {Icons} from '../../UI/Icons';

import {
  useSearchController,
  UseSearchControllerParams,
} from './useSearchController';

interface Props extends UseSearchControllerParams {}

export function Search({onSearch}: Props): JSX.Element {
  const {
    searchTerm,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
  } = useSearchController({onSearch});

  return (
    <Pressable style={styles.searchBarContainer} onPress={handlePress}>
      <TextInput
        placeholder="Search"
        style={styles.searchBarInput}
        onChangeText={handleChange}
        value={searchTerm}
        ref={searchInputRef}
        autoCapitalize="none"
      />
      {searchTerm && (
        <Pressable
          onPress={handleResetSearchInput}
          style={({pressed}) => [
            styles.resetSearchIconContainer,
            pressed && styles.searchPress,
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
        ]}
        disabled={!searchTerm}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </Pressable>
  );
}
