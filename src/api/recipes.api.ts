import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export interface SeachOptions {
  search: string;
  sort?: string; // Reference SortOptionModel.id
  filter?: Array<{
    key: string; // Reference FilterModel.id
    value: string; // Reference FilterValueModel.id
  }>;
}

export const searchRecipes = async (options: SeachOptions) => {
  try {
    const result = await axios.get(`${BASE_URL}/recipes`, {
      params: options,
    });
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
