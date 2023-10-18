import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import { RecipePostModel } from '../../stores/types';
import { postRecipe } from '../../stores/recipe/recipeSlice';
import { useGetProducts, useProductsStore } from '../../stores/product/hooks';
import { useCategoriesStore, useGetCategories } from '../../stores/categories';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';
import { useRecipesStore, useResetRecipeStatus } from '../../stores/recipe/hooks';
import { IngredientItem, InstructionItem } from '../../models';
import { useResetAddImageState } from '../../stores/addImage/hooks/useResetAddImageState';

export const useRecipeFormController = () => {

  const [ingredients, setIngredients] = useState<Array<IngredientItem>>([]);
  const [instructions, setInstructions] = useState<Array<InstructionItem>>([]);
  const [generalForm, setGeneralForm] = useState<Omit<RecipePostModel, 'ingredients' | 'instructions'>>();

  const dispatch = Redux.useDispatch();
  const reset = useResetRecipeStatus();
  const resetImageStatus = useResetAddImageState();
  const getProducts = useGetProducts();
  const { products } = useProductsStore();
  const getCategories = useGetCategories();
  const { categories } = useCategoriesStore();
  const RecipesStore = useRecipesStore();

  const [status, setStatus] = useState<string>('');

  const productsValue: Array<OptionModel> = OptionsManager.getProductOptionsArray(products);
  const categoriesValue = OptionsManager.getCategoriesOptionsArray(categories);

  const [productsList, setProductsList] = useState<Array<OptionModel>>([{
    value: '', label: '',
  }]);

  useEffect(() => {
    getCategories(dispatch);
    getProducts(dispatch);

    return () => {
      reset(dispatch);
      resetImageStatus(dispatch);
    };
  }, []);

  useEffect(() => {
    setProductsList(productsValue);
  }, [products]);

  const handleGeneralForm = useCallback((generalFormValue: Omit<RecipePostModel, 'ingredients' | 'instructions'>) => {
    setGeneralForm(generalFormValue);
  }, [setGeneralForm]);

  useEffect(() => {
    if (RecipesStore.status === 201) {
      setStatus('Created successful!');
      setIngredients([]);
      setInstructions([]);
      resetImageStatus(dispatch);
    }

    if (RecipesStore.error) {
      setStatus(RecipesStore.error);
    }
  }, [RecipesStore.status, RecipesStore.error]);

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
    setStatus('');
    if (!generalForm) {
      return;
    }

    const recipe: RecipePostModel = {
      ...generalForm,
      ingredients,
      instructions,
    };

    dispatch(postRecipe(recipe));

  }, [ generalForm, ingredients, instructions]);

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
    status,
    isLoading: RecipesStore.isLoading,
  };
};
