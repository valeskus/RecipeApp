import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import { RecipePostModel, RecipeStateType } from '../../stores/recipe/types';
import { postRecipe } from '../../stores/recipe/recipeSlice';
import { useGetProducts, useProductsStore } from '../../stores/product/hooks';
import { useCategoriesStore, useGetCategories } from '../../stores/categories';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';
import { useRecipesStore } from '../../stores/recipe/hooks';
import { IngredientItem } from '../../models';

export const useRecipeFormController = () => {
  const [ingredientsFormArray, setIngredientsFormArray] = useState<Array<number>>([1]);
  const [instructionsFormArray, setInstructionsFormArray] = useState<Array<number>>([1]);
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

  // const [instructions, setInstructions] = useState<>();

  const dispatch = Redux.useDispatch();
  const getProducts = useGetProducts();
  const getCategories = useGetCategories();
  const { products } = useProductsStore();
  const { categories } = useCategoriesStore();
  const { create }: RecipeStateType = useRecipesStore();

  const difficultyValue = OptionsManager.getOptionsArray(['0', '1', '2']);
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);
  const productsValue = OptionsManager.getProductOptionsArray(products);
  const categoriesValue = OptionsManager.getCategoriesOptionsArray(categories);

  useEffect(() => {
    getCategories(dispatch);
    getProducts(dispatch);
  }, []);

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

  const handleCategoryArray = useCallback((value: Array<string>) => {
    setCategoriesArray(value);
  }, [setCategoriesArray]);

  const onAddIngredient = useCallback((ingredientItem: IngredientItem) => {
    setIngredients([...ingredients, ingredientItem]);
    console.log([...ingredients, ingredientItem]);
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

    dispatch(postRecipe(recipe));
  }, [title, titleUA, description, descriptionUA, time, image,  units,
    servingsCount, difficulty, ingredients]);

  const onAddIngredientForm = useCallback(() => {
    setIngredientsFormArray([...ingredientsFormArray, ingredientsFormArray.length + 1 ]);
  }, [ingredientsFormArray, setIngredientsFormArray]);

  const onAddInstructionForm = useCallback(() => {
    setInstructionsFormArray([...instructionsFormArray, instructionsFormArray.length + 1 ]);
  }, [instructionsFormArray, setInstructionsFormArray]);

  const removeIngredient = useCallback((id: string) => {
    console.log('UP');
    const updateIngredients =  ingredients.filter((ingredient) => {
      return ingredient.id !== id;
    });
    setIngredients(updateIngredients);
  }, [ingredients]);

  return {
    unitsValue,
    difficultyValue,
    categoriesValue,
    ingredientsFormArray,
    ingredients,
    products,
    productsValue,
    onAddIngredientForm,
    instructionsFormArray,
    onAddInstructionForm,
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
    removeIngredient,
  };
};
