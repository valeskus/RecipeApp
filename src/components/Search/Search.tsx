import React from 'react';
import { Image, TextInput, Pressable } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import {
  useSearchController,
  UseSearchControllerParams,
} from './useSearchController';

interface Props extends UseSearchControllerParams {}

export function Search({ onSearch }: Props): JSX.Element {
  const {
    search,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
  } = useSearchController({ onSearch });

  return (
    <Pressable style={styles.searchBarContainer} onPress={handlePress}>
      <TextInput
        placeholder="Search"
        style={styles.searchBarInput}
        onChangeText={handleChange}
        value={search}
        ref={searchInputRef}
        autoCapitalize="none"
      />
      {search && (
        <Pressable
          onPress={handleResetSearchInput}
          style={({ pressed }) => [
            styles.resetSearchIconContainer,
            pressed && styles.searchPress,
          ]}
          disabled={!search}
        >
          <Image source={Icons.cancel} style={styles.resetSearchIcon} />
        </Pressable>
      )}

      <Pressable
        onPress={handleSearch}
        style={({ pressed }) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
        ]}
        disabled={!search}
      >
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </Pressable>
  );
}
