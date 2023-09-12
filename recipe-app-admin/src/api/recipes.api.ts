
import { RecipePostModel } from '../stores/recipe/types';

import { client } from './client.api';

export const postRecipe = async (body: RecipePostModel): Promise<{}> => {
  const result = await client.post('/recipe', body);

  return result;
};
