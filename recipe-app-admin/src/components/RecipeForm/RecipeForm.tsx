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

  return (
    <div className="productFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={() => { }} />
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => { }} />

      <Select label="Units:" placeholder="---" optionArray={['ml', 'g']} onChange={() => { }} />
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
