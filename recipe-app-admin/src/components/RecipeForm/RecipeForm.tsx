import React, { useCallback, useState } from 'react';
import * as Redux from 'react-redux';
import './RecipeForm.style.css';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { RecipePostModel } from '../../stores/recipe/types';
import { postRecipe } from '../../stores/recipe/recipeSlice';
import { useGetProducts, useProductsStore } from '../../stores/product/hooks';
import { useCategoriesStore, useGetCategories } from '../../stores/categories';
import { SelectComponent } from '../common/Select/Select';
import { OptionsManager } from '../managers/OptionsManager';

import { IngredientForm } from './components/IngredientForm';
import { InstructionForm } from './components/InstructionForm';

export function RecipeForm(): JSX.Element {
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

  return (
    <div className="recipeFormContainer">
      <div className="formsContainer">
        <Input label="Title :" type="text" placeholder="Title" onChange={() => { }} />
        <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => { }} />
        <Input label="Description:" type="text" placeholder="Description" onChange={() => { }} />
        <Input label="Description UA:" type="text" placeholder="опис" onChange={() => { }} />
        <SelectComponent label="Units:"
          placeholder="units" multiple={false} options={unitsValue} onChange={() => { }}
        />
        <Input label="Image:" type="url" placeholder="image url" onChange={() => { }} />
        <Input label="Time:" type="number" placeholder="time in minutes" onChange={() => { }} />
        <Input label="Amount:" type="number" placeholder="amount" onChange={() => { }} />
        <Input label="Servings Count:" type="number" placeholder="number of servings count" onChange={() => { }} />
        <SelectComponent label="Difficulty:" placeholder="---" multiple={false}
          options={difficultyValue} onChange={() => { }}
        />
        <SelectComponent label="Categories:" placeholder="---" multiple={ true}
          options={categoriesValue} onChange={handleMultiple}
        />
      </div>
      <div className="dynamicFormContainer">
        <div  className="dynamicForm">
          {ingredientsFormArray.map((index) => {
            return <IngredientForm products={productsValue} key={index}/>;
          })}
          <Button title="+" onClick={onAddIngredientForm} />
        </div>
        <div className="dynamicForm">
          {instructionsFormArray.map((index) => {
            return <InstructionForm key={index}/>;
          })}
          <Button title="+" onClick={onAddInstructionForm} />
        </div>
      </div>
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
