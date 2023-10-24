import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import {PLAYGROUND} from '@env';
import {Playground} from './src/UI/Playground';
import './src/localization/i18n';


global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

if (PLAYGROUND === 'true') {
  AppRegistry.registerComponent(appName, () => Playground);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
