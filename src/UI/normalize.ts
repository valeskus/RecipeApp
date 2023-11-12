import { Dimensions, PixelRatio } from 'react-native';

export function normalize(size: number) {
  const {
    width: SCREEN_WIDTH,
  } = Dimensions.get('window');

  const scale = SCREEN_WIDTH / 320;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
