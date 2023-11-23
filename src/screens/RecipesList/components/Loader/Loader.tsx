import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Colors } from '@UI/Colors';

import { styles } from './styles';

export function Loader(): JSX.Element {
    return (<View style={styles.flatListLoaderContainer}>
      <ActivityIndicator animating size="large" color={Colors.primary} />
    </View>);
  }
