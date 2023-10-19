import axios from 'axios';
import { API_URL } from '@env';

export const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept-Language': 'en'  },
});

export const changeLanguage = (language: string) => {
  Object.assign(client.defaults.headers.common, {
    'Accept-Language': language,
  }
    );
};
