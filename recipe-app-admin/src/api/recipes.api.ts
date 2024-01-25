
import { RecipePostModel } from '../stores/types';

import { client } from './client.api';

export const postRecipe = async (body: RecipePostModel): Promise<{}> => {
  const result = await client.post('/recipe', body);

  return result;
};

export const getRecipes = async (search: string): Promise<{}> => {
  const result = await client.get('/search', {
    params: {
      search,
      pageSize: 100,
    },
  });

  return result;
};
