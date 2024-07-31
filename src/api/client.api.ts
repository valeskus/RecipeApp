import axios from 'axios';

import { RemoteConfigManager } from '@managers/RemoteConfigManager';

import { EventService } from '@services/EventService';

export const client = axios.create({});

export function init() {
  client.defaults.baseURL = RemoteConfigManager.get('API_URL');
}

client.interceptors.response.use((response) =>
  response,
  (error) => {
    EventService
      .emit('app:error', {
        moduleName: `${error.config.method} ${error.config.url}`,
        error: new Error(error.message),
      });

    return error;
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
