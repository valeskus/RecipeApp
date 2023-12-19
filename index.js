import { AppRegistry, LogBox, StyleSheet } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { PLAYGROUND } from '@env';
import { Playground } from './src/UI/Playground';
import './src/localization/i18n';
import { EventService } from './src/infrastructure/services/EventService';

import { normalize } from './src/UI/normalize'

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

EventService.init();

if (!__DEV__) {
  global.ErrorUtils.setGlobalHandler((error) => {
    EventService.emit('app:error', {
      moduleName: 'Global',
      error
    });
  });
}

LogBox.ignoreLogs([
  'Overwriting fontSize style attribute preprocessor',
]);

StyleSheet.setStyleAttributePreprocessor('fontSize', (size) => {
  return normalize(size)
});

if (PLAYGROUND === 'true') {
  AppRegistry.registerComponent(appName, () => Playground);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
