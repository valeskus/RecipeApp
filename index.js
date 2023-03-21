import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PLAYGROUND} from '@env';
import {Playground} from './src/UI/Playground';

if (PLAYGROUND === 'true') {
  AppRegistry.registerComponent(appName, () => Playground);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
