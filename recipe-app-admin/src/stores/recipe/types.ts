
export type RecipeCreateState = {
  status: string;
  error: unknown | string;
  isLoading: boolean;
};

export type RecipePostModel = {
  title: string;
  time: 0;
  image: string;
  amount: 0;
  units: 'g' | 'ml';
  description: string;
  servingsCount: 0;
  instructions: [
    {
      description: string;
      image: string;
      translations: {
        ua: {
          description: string;
        };
      };
    },
  ];
  difficulty: number;
  categories: Array<string>;
  ingredients: [
    {
      title: string;
      amount: number;
    },
    {},
  ];
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
