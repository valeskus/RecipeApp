import { AppRegistry, Dimensions, LogBox, PixelRatio,StyleSheet } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { PLAYGROUND } from '@env';
import { Playground } from './src/UI/Playground';
import './src/localization/i18n';

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

LogBox.ignoreLogs([
  'Overwriting fontSize style attribute preprocessor',
]);

StyleSheet.setStyleAttributePreprocessor('fontSize', (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
});

if (PLAYGROUND === 'true') {
  AppRegistry.registerComponent(appName, () => Playground);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
