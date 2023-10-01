import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import { RecipePostModel, RecipeStateType } from '../../stores/recipe/types';
import { postRecipe } from '../../stores/recipe/recipeSlice';
import { useGetProducts, useProductsStore } from '../../stores/product/hooks';
import { useCategoriesStore, useGetCategories } from '../../stores/categories';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';
import { useRecipesStore } from '../../stores/recipe/hooks';
import { IngredientItem, InstructionItem } from '../../models';

export const useRecipeFormController = () => {
  const [ingredients, setIngredients] = useState<Array<IngredientItem>>([]);
  const [instructions, setInstructions] = useState<Array<InstructionItem>>([]);
  const [generalForm, setGeneralForm] = useState<Omit<RecipePostModel, 'ingredients' | 'instructions'>>();

  const dispatch = Redux.useDispatch();
  const getProducts = useGetProducts();
  const { products } = useProductsStore();
  const getCategories = useGetCategories();
  const { categories } = useCategoriesStore();
  const { create }: RecipeStateType = useRecipesStore();

  const productsValue = OptionsManager.getProductOptionsArray(products);
  const categoriesValue = OptionsManager.getCategoriesOptionsArray(categories);

  const [productsList, setProductsList] = useState<Array<OptionModel>>([{
    value: '', label: '',
  }]);

  useEffect(() => {
    getCategories(dispatch);
    getProducts(dispatch);
  }, []);
  useEffect(() => {
    setProductsList(productsValue);
  }, [products]);

  const handleGeneralForm = useCallback((generalFormValue: Omit<RecipePostModel, 'ingredients' | 'instructions'>) => {
    setGeneralForm(generalFormValue);
    console.log(1, generalFormValue);
  }, [setGeneralForm]);

  useEffect(() => {
    if (create.status === 'Created') {
      alert('Created successful!');
    }

    if (create.error) {
      alert(create.error.message);
    }
  }, [create.status, create.error]);

  const onAddIngredient = useCallback((ingredientItem: IngredientItem) => {
    setIngredients([...ingredients, ingredientItem]);
    setProductsList(productsList.filter((product) => product.value !== ingredientItem.id));
  }, [ingredients, productsList]);

  const removeIngredient = useCallback((id: string) => {
    const updateIngredients =  ingredients.filter((ingredient) => {
      return ingredient.id !== id;
    });
    setIngredients(updateIngredients);
    const removedProduct = productsValue.find((product) => product.value === id);
    if (!removedProduct) {
      return;
    }

    setProductsList([...productsList, removedProduct]);
  }, [ingredients]);

  const onAddInstruction = useCallback((instructionItem: InstructionItem) => {
    setInstructions([...instructions, instructionItem]);
  }, [instructions]);

  const removeInstruction = useCallback((itemDescription: string) => {
    const updateInstructions =  instructions.filter((instruction) => {
      return instruction.description !== itemDescription;
    });
    setInstructions(updateInstructions);
  }, [ingredients]);
  const onSend = useCallback(() => {
    if (!generalForm) {
      return;
    }

    const recipe: RecipePostModel = {
      ...generalForm,
      ingredients,
      instructions,
    };

    dispatch(postRecipe(recipe));

  }, [ ingredients, instructions]);

  return {
    categoriesValue,
    ingredients,
    instructions,
    products,
    productsList,
    productsValue,
    onSend,
    onAddIngredient,
    onAddInstruction,
    removeIngredient,
    removeInstruction,
    handleGeneralForm,
  };
};
