import axios from 'axios';

import { RemoteConfigManager } from '@managers/RemoteConfigManager';

 function getApiUrl(){
  return RemoteConfigManager.get('API_URL').asString();
 }

export const client = axios.create({
  baseURL: getApiUrl(),
});

export const changeLanguage = (language: string) => {
  if (!language) {
    return Object.assign(client.defaults.headers.common, {
      'Accept-Language': 'en',
    });
  }

  return Object.assign(client.defaults.headers.common, {
    'Accept-Language': language,
  });
};
