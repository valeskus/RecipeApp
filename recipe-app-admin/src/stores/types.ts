import { ImageModel } from '../models';

export type AddImagesStateType = {
  url: string;
  status: string;
  error:  any ;
  isLoading: boolean;
};

export type AddInstructionImageStateType = {
  url: string;
  status: string;
  error:  any ;
  isLoading: boolean;
};

export type ImagesStateType = {
  images: Array<ImageModel> | null;
  error:  any ;
  isLoading: boolean;
};

export const IMAGE = 'image';
export const IMAGES = 'images';

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
};

export const RECIPES = 'recipes';

export type CategoryModel = {
  id: string;
  title: string;
  image: string;
};

export type CategoryPostModel = {
  title: string;
  translations: {
    ua: {
      title: string;
    };
  };
  image: string;
  type: 'diet' | 'meal';
};

export type CategoriesStateType = {
  categories: Array<CategoryModel> ;
  error: string;
  isLoading: boolean;
};

export type CreateCategoriesStateType = {
  status: string | number;
  error: string;
  isLoading: boolean;
};

export type  CategoriesListModel = {
  categories: Array<CategoryModel>;
};

export const CATEGORIES = 'categories';

export type ProductModel = {
  id: string;
  title: string;
  kCal: number;
  proteins: number;
  carbs: number;
  fats: number;
  units: 'g' | 'ml';
};

export type ProductPostModel = {
  title: string;
  kCal: number;
  proteins: number;
  carbs: number;
  fats: number;
  units: 'ml' | 'g';
  translations: {
    ua: {
      title: string;
    };
  };
};

export type  ProductsListModel = {
  products: Array<ProductModel>;
};

export type CreateProductStateType = {
  status: number;
  error:  any ;
  isLoading: boolean;
};

export type ProductsStateType = {
  products: Array<ProductModel> ;
  error: unknown | string;
  isLoading: boolean;
};

export const PRODUCTS = 'products';
