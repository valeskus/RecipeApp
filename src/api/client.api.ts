import axios from 'axios';

import { RemoteConfigManager } from '@managers/RemoteConfigManager';

export const client = axios.create({});

export function init() {
  client.defaults.baseURL = RemoteConfigManager.get('API_URL');
}

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
