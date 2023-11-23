import {  CategoryModel, ProductModel } from '../../../stores/types';

export class OptionsManager {
  static getOptionsArray(array: Array<string>) {
    if (!array) {
      return [];
    }

    return  array.map((item) => {
      return { value: item, label: item };
    });
  }

  static getProductOptionsArray(products: Array<ProductModel>) {
    const array = products.map((product) => {
      return { value: product.id, label: product.title };
    });

    if (!array) {
      return [{ value: '0', label: 'Empty' }];
    }

    return array;
  }

  static getCategoriesOptionsArray(categories: Array<CategoryModel>) {
    const array = categories?.map((category) => {
      return { value: category.id, label: category.title };
    });

    if (!array) {
      return [{ value: '0', label: 'Empty' }];
    }

    return array;
  }
}

// [{ value: 'meal', label: 'meal' }, { value: 'diet', label: 'diet' }]
