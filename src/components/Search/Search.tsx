import React from 'react';
import { Image, TextInput, Pressable } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import {
  SearchControllerParams,
  useSearchController,
} from './useSearchController';

interface Props extends SearchControllerParams {}

export function Search({ onSearch }: Props): JSX.Element {
  const {
    searchTerm,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
    t,
  } = useSearchController({ onSearch });

  return (
    <Pressable style={styles.searchBarContainer} onPress={handlePress}>
      <TextInput
        placeholder={t('scope.search')}
        style={styles.searchBarInput}
        onChangeText={handleChange}
        value={searchTerm}
        ref={searchInputRef}
        autoCapitalize="none"
      />
      {searchTerm && (
        <Pressable
          onPress={handleResetSearchInput}
          style={({ pressed }) => [
            styles.resetSearchIconContainer,
            pressed && styles.searchPress,
          ]}
          disabled={!searchTerm}
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
        disabled={!searchTerm}
      >
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </Pressable>
  );
}
