import axios from 'axios';
import {CategoryListModel} from '../models';

import {API_URL} from '@env';

export const getCategories = async () => {
  const result = await axios.get<CategoryListModel>(`${API_URL}/categories`);
  return result.data;
};
