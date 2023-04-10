import axios from 'axios';

const BASE_URL = 'http://localhost:';

export const getCategories = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/categories`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
