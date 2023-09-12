import React from 'react';
import * as Redux from 'react-redux';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import './RecipeForm.style.css';
import { RecipePostModel } from '../../stores/recipe/types';
import { postRecipe } from '../../stores/recipe/recipeSlice';

export function RecipeForm(): JSX.Element {
  const dispatch = Redux.useDispatch();

  React.useEffect(() => {
  }, []);

  //TODO product state
  const recipe: RecipePostModel = {
    title: 'TEST',
    time: 0,
    image: '',
    amount: 0,
    units: 'g',
    description: '',
    servingsCount: 0,
    instructions: [
      {
        description: '',
        image: '',
        translations: {
          ua: {
            description: '',
          },
        },
      },
    ],
    difficulty: 1,
    categories: ['Lunch'],
    ingredients: [
      {
        title: '',
        amount: 0,
      },
      {},
    ],
    translations: {
      ua: {
        title: '',
        description: '',
      },
    },
  };

  const onSend = () => {
    if (!recipe) {
      return alert('Please,check data');
    }

    dispatch(postRecipe(recipe));
  };

  return (
    <div className="productFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={() => { }} />
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => { }} />

      <Select label="Units:" placeholder="---" optionArray={['ml', 'g']} onChange={() => { }} />
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
