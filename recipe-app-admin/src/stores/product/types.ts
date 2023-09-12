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

export type ProductsModelState = {
  data: Array<ProductModel> | null;
  error: unknown | string;
  isLoading: boolean;
};

export type ProductCreateState = {
  status: string;
  error: unknown | string;
  isLoading: boolean;
};

export type ProductsStateType = {
  products: ProductsModelState;
  create: ProductCreateState;

};

export const PRODUCTS = 'products';
