import React, {useCallback} from 'react';
import {
  Image,
  View,
  TextInput,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import {Icons} from '../../UI/Icons';

import * as SearchStore from '../../stores/search';

export type Props = {
  onSearch: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function Search({onSearch, pressableStyle}: Props): JSX.Element {
  const {searchTerm} = SearchStore.useSearchStore();

  const setSearchTerm = SearchStore.useSearchTerm();

  const handleChange = useCallback(
    (nextValue: string) => {
      setSearchTerm({searchTerm: nextValue});
    },
    [setSearchTerm],
  );
  const handlePress = useCallback(() => {
    onSearch();
  }, [onSearch]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search"
        style={styles.searchBarInput}
        onChangeText={handleChange}
        value={searchTerm}
      />
      <Pressable
        onPress={handlePress}
        style={({pressed}) => [
          styles.searchBarIconContainer,
          pressed && styles.searchPress,
          pressableStyle,
        ]}
        disabled={!searchTerm}>
        <Image source={Icons.search} style={styles.searchBarIcon} />
      </Pressable>
    </View>
  );
}
