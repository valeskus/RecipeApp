import { RecipePostModel } from '../models';

import { client } from './client.api';

export const postRecipe = async (body: RecipePostModel): Promise<void> => {
  await client.post('/recipe',
    {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
};
