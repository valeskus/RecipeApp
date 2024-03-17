export interface CategoryModel {
  id: string;
  title: string;
  image: string;
}
export interface CategoryListModel {
  categories: Array<CategoryModel>;
}
export interface CategoryPostModel {
  title: string;
  translations: {
    ua: {
      title: string;
    };
  };
  image: string;
  type: 'diet' | 'meal';
}
export interface BaseRecipeModel {
  id: string;
  title: string;
  kCal: number;
  time: number;
  image: string;
}
export interface RecipePostModel {
  title: string;
  description: string;
  translations: {
    ua: {
      title: string;
      description: string;
    };
    time: number;
    image: string;
    amount: number;
    units: 'ml' | 'g';
    servingsCount: number;
    difficulty: 1 | 2 | 3;
    categories: Array<string>;
    ingredients: Array<IngredientItem>;
    instructions: Array<InstructionItem>;
  };
}

export interface IngredientItem {
  id: string;
  amount: number;
}

export interface InstructionItem {
  description: string;
  translations: {
    ua: {
      description: string;
    };
  };
  image?: string;
}
export interface ProductModel {
  id: string;
  title: string;
  kCal: number;
  proteins: number;
  carbs: number;
  fats: number;
  units: 'g' | 'ml';
}

export interface ProductsListModel {
  products: Array<ProductModel>;
}

export interface ProductPostModel {
  title: string;
  kCal: number;
  proteins: number;
  carbs: number;
  fats: number;
  units: 'g' | 'ml';
  translations: {
    ua: {
      title: string;
    };
  };
}

export interface ImageListModel {
  images: [
    {
      url: 'https://picsum.photos/500/500';
    },
  ];
}

export type ImageModel = {
  id: string;
  url: string;
};
