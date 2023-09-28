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
  const [title, setTitle] = useState<string>('');
  const [titleUA, setTitleUA] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [descriptionUA, setDescriptionUA] = useState<string>('');
  const [units, setUnits] = useState<'g' | 'ml'>('g');
  const [image, setImage] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [servingsCount, setServingsCount] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number >(0);
  const [categoriesArray, setCategoriesArray] = useState<Array<string>>([]);
  const [ingredients, setIngredients] = useState<Array<IngredientItem>>([]);
  const [instructions, setInstructions] = useState<Array<InstructionItem>>([]);

  const dispatch = Redux.useDispatch();
  const getProducts = useGetProducts();
  const { products } = useProductsStore();
  const getCategories = useGetCategories();
  const { categories } = useCategoriesStore();
  const { create }: RecipeStateType = useRecipesStore();

  const difficultyValue = OptionsManager.getOptionsArray(['0', '1', '2']);
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);
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

  useEffect(() => {
    if (create.status === 'Created') {
      alert('Created successful!');
    }

    if (create.error) {
      alert(create.error.message);
    }
  }, [create.status, create.error]);

  const handleTitle = useCallback((value: string) => {
    setTitle(value);
  }, [setTitle]);

  const handleUATitle = useCallback((value: string) => {
    setTitleUA(value);
  }, [setTitleUA]);

  const handleDescription = useCallback((value: string) => {
    setDescription(value);
  }, [setDescription]);

  const handleDescriptionUA = useCallback((value: string) => {
    setDescriptionUA(value);
  }, [setDescriptionUA]);

  const handleUnits = useCallback(({ value }: OptionModel) => {
    if (value !== 'g' || 'ml') {
      return;
    }

    setUnits(value);
  }, [setUnits]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
  }, [setImage]);

  const handleTime = useCallback((value: string) => {
    setTime(+value);
  }, [setTime]);

  const handleAmount = useCallback((value: string) => {
    setAmount(+value);
  }, [setAmount]);

  const handleServingsCount = useCallback((value: string) => {
    setServingsCount(+value);
  }, [setServingsCount]);

  const handleDifficulty = useCallback(({ value }: OptionModel) => {
    if (+value !==  0 || 1 || 2) {
      return;
    }

    setDifficulty(+value);
  }, [setDifficulty]);

  const handleCategoryArray = useCallback((arrayOfCategories: Array<OptionModel>) => {
    const stringArray = arrayOfCategories.map((item) => {
      return item.value;
    });
    setCategoriesArray(stringArray);
  }, [setCategoriesArray]);

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
    const recipe: RecipePostModel = {
      title,
      description,
      translations: {
        ua: {
          title: titleUA,
          description: descriptionUA,
        },
      },
      time,
      image,
      amount,
      units,
      servingsCount,
      difficulty,
      categories: categoriesArray,
      ingredients,
      instructions,
    };

    dispatch(postRecipe(recipe));
    setTitle(''); setTitleUA(''); setDescription(''); setDescriptionUA(''); setAmount(0);
    setImage(''); setIngredients([]); setInstructions([]); setServingsCount(0); setTime(0);
  }, [title, titleUA, description, descriptionUA, categoriesArray, time, image,  units,
    servingsCount, difficulty, ingredients, instructions]);

  return {
    unitsValue,
    difficultyValue,
    categoriesValue,
    ingredients,
    instructions,
    products,
    productsList,
    productsValue,
    onSend,
    handleTitle,
    handleUATitle,
    handleDescription,
    handleDescriptionUA,
    handleUnits,
    handleImage,
    handleTime,
    handleAmount,
    handleServingsCount,
    handleDifficulty,
    handleCategoryArray,
    onAddIngredient,
    onAddInstruction,
    removeIngredient,
    removeInstruction,
    title, titleUA, description, descriptionUA, time, image,
    servingsCount, amount,
  };
};
