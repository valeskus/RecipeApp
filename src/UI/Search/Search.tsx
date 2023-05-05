import React, {useCallback, useState} from 'react';
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

export type Props = {
  onSearch: (e: string) => void;
  pressableStyle?: StyleProp<ViewStyle>;
  searchTerm?: string;
};

export function Search({
  onSearch,
  pressableStyle,
  searchTerm,
}: Props): JSX.Element {
  const [searchValue, setSearchValue] = useState(searchTerm || '');

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
