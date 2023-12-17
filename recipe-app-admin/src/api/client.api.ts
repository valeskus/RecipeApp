import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept-Language': 'en',
  },

});

client.interceptors.response.use(undefined, ({ response }) => {
  throw new Error(response.data.message);
});
