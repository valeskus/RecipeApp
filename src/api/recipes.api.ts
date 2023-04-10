import axios from 'axios';

const BASE_URL = 'http://localhost:';

export const getRecipes = async (options: {}) => {
  try {
    const result = await axios.get(`${BASE_URL}/recipes`, {data: {options}});
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeById = async (id: string) => {
  try {
    const result = await axios.get(`${BASE_URL}/recipes/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
