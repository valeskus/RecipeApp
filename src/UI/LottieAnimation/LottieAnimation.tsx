import React from 'react';
import LottieView from 'lottie-react-native';

import { styles } from './styles';

export function LottieAnimation(): JSX.Element {
  return (
    <LottieView
      style={styles.lottieContainer}
      source={require('../animationConfigs/snow.json')}
      autoPlay
      loop
      resizeMode="cover"
      speed={0.5}
    />
  );
}
