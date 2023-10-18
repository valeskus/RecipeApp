export type RecipePostModel = {
  title: string;
  time: number;
  image: string;
  amount: number;
  units: 'g' | 'ml';
  description: string;
  servingsCount: number;
  instructions: Array<{
    description: string;
    image?: string;
    translations: {
      ua: {
        description: string;
      };
    };
  }>;
  difficulty: number;
  categories: Array<string>;
  ingredients: Array <{
    id: string;
    amount: number;
  }>;
  translations: {
    ua: {
      title: string;
      description: string;
    };
  };
};

export type RecipeStateType = {
  status: number | string;
  error: string ;
  isLoading: boolean;
  recipeImage: {
    status: string;
    error: string | unknown;
    isLoading: boolean;
    url: string;
  };
  instructionImage: {
    status: string;
    error: string | unknown;
    isLoading: boolean;
    url: string;
  };
};

export const RECIPES = 'recipes';
