import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PLAYGROUND} from '@env';
import {Playground} from './src/UI/Playground';
import {searchRecipes} from './src/api/recipes.api';

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

searchRecipes({
  search: 'test_search',
  sort: 'sort_id',
  filter: [
    {
      key: 'filter_key',
      value: 'filter_value',
    },
    {
      key: 'filter_key_2',
      value: 'filter_value_2',
    },
  ],
});

if (PLAYGROUND === 'true') {
  AppRegistry.registerComponent(appName, () => Playground);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
