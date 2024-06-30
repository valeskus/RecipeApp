import axios from 'axios';

import { RemoteConfigManager } from '@managers/RemoteConfigManager';

const API_URL = RemoteConfigManager.get('API_URL');

export const client = axios.create({
  baseURL: API_URL.asString(),
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
