import axios from 'axios';
import { API_URL } from '@env';

export const client = axios.create({
  baseURL: API_URL,
});

export const changeLanguage = (language: string) => {
 return Object.assign(client.defaults.headers.common, {
    'Accept-Language': language,
  }
    );
};
