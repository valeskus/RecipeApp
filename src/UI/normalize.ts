import { Dimensions, PixelRatio, Platform } from 'react-native';

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

const ANDROID_NORMALIZE = 2;

const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - ANDROID_NORMALIZE;
  }
}
