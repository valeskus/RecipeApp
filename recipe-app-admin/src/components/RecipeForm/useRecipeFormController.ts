import React, { useCallback, useState } from 'react';
import * as Redux from 'react-redux';

import { RecipePostModel } from '../../stores/recipe/types';
import { postRecipe } from '../../stores/recipe/recipeSlice';
import { useGetProducts, useProductsStore } from '../../stores/product/hooks';
import { useCategoriesStore, useGetCategories } from '../../stores/categories';
import { OptionsManager } from '../managers/OptionsManager';

export const useRecipeFormController = () => {
  const [ingredientsFormArray, setIngredientsFormArray] = useState<Array<number>>([1]);
  const [instructionsFormArray, setInstructionsFormArray] = useState<Array<number>>([1]);

  const dispatch = Redux.useDispatch();
  const getProducts = useGetProducts();
  const getCategories = useGetCategories();
  const { products } = useProductsStore();
  const { categories } = useCategoriesStore();

  //TODO this value is string but you need number
  const difficultyValue = OptionsManager.getOptionsArray(['0', '1', '2']);
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);
  const productsValue = OptionsManager.getProductOptionsArray(products);
  const categoriesValue = OptionsManager.getCategoriesOptionsArray(categories);

  React.useEffect(() => {
    getCategories(dispatch);
    getProducts(dispatch);
  }, []);

  //TODO product state
  const recipe: RecipePostModel = {
    title: 'TEST',
    description: "This lasagna recipe takes a little work, but it is so satisfying and filling that it's worth it!",
    translations: {
      ua: {
        title: 'Lasagna',
        description: "This lasagna recipe takes a little work, but it is so satisfying and filling that it's worth it!",
      },
    },
    time: 5,
    image: 'https://picsum.photos/500/500',
    amount: 200,
    units: 'ml',
    servingsCount: 2,
    difficulty: 0,
    categories: [
      '65003f424da9dc435e8a30d1',
    ],
    ingredients: [
      {
        id: '64e0a686b09d1e88b0558b02',
        amount: 200,
      },
    ],
    instructions: [
      {
        description: 'Gather all your ingredients',
        translations: {
          ua: {
            description: 'Gather all your ingredients',
          },
        },
        image: 'https://picsum.photos/500/500',
      },
    ],
  };

  const onSend = () => {
    if (!recipe) {
      return alert('Please,check data');
    }

    dispatch(postRecipe(recipe));
  };

  const onAddIngredientForm = useCallback(() => {
    setIngredientsFormArray([...ingredientsFormArray, ingredientsFormArray.length + 1 ]);
  }, [ingredientsFormArray, setIngredientsFormArray]);

  const onAddInstructionForm = useCallback(() => {
    setInstructionsFormArray([...instructionsFormArray, instructionsFormArray.length + 1 ]);
  }, [instructionsFormArray, setInstructionsFormArray]);

  const handleMultiple = useCallback((e: any) => {
    console.log(e);
  }, []);

  return {
    unitsValue,
    difficultyValue,
    categoriesValue,
    handleMultiple,
    ingredientsFormArray,
    productsValue,
    onAddIngredientForm,
    instructionsFormArray,
    onAddInstructionForm,
    onSend,
  };
};
