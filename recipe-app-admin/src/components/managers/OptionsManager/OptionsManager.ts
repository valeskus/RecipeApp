import { CategoriesModelState } from '../../../stores/types';
import { ProductsModelState } from '../../../stores/types';

export class OptionsManager {
  static getOptionsArray(array: Array<string>) {
    if (!array) {
      return [];
    }

    return  array.map((item) => {
      return { value: item, label: item };
    });
  }

  static getProductOptionsArray(products: ProductsModelState) {
    const array = products.data?.map((product) => {
      return { value: product.id, label: product.title };
    });

    if (!array) {
      return [{ value: '0', label: 'Empty' }];
    }

    return array;
  }

  static getCategoriesOptionsArray(categories: CategoriesModelState) {
    const array = categories.data?.map((product) => {
      return { value: product.id, label: product.title };
    });

    if (!array) {
      return [{ value: '0', label: 'Empty' }];
    }

    return array;
  }
}

// [{ value: 'meal', label: 'meal' }, { value: 'diet', label: 'diet' }]
