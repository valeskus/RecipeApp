
export type RecipeCreateState = {
  status: string;
  error: any;
  isLoading: boolean;
};

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
    image: string;
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
  create: RecipeCreateState;

};

export const RECIPES = 'recipes';
