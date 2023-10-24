import axios from 'axios';
import { API_URL } from '@env';

export const client = axios.create({
  baseURL: API_URL,
});

export const changeLanguage = (language: string) => {
  if (!language) {
    return Object.assign(client.defaults.headers.common, {
      'Accept-Language': 'en',
    }
    );
  }

  return Object.assign(client.defaults.headers.common, {
    'Accept-Language': language,
  }
  );
};
