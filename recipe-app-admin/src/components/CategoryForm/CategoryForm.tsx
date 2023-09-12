import React from 'react';
import * as Redux from 'react-redux';

import {  postCategory } from '../../stores/categories/categoriesSlice';
import { CategoriesStateType, CategoryPostModel } from '../../stores/categories/types';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import './CategoryForm.style.css';
import { useCategoriesStore } from '../../stores/categories';

export function CategoryForm(): JSX.Element {
  const {  create }: CategoriesStateType = useCategoriesStore();

  React.useEffect(() => {
    if (create.status === 'Created') {
      alert('Created successful!');
    }

    if (create.error) {
      alert(create.error);
    }
  }, [create.status]);

  //TODO categories state

  const category: CategoryPostModel = {
    title: 'Dessert',
    translations: {
      ua: {
        title: 'Десерт',
      },
    },
    image: 'https://picsum.photos/500/500',
    type: 'meal',
  };

  const dispatch = Redux.useDispatch();

  const onSend = () => {
    if (!category) {
      return alert('Please,check data');
    }

    dispatch(postCategory(category));
  };

  return (
    <div className="categoryFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={() => {}}/>
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => {}}/>
      <Input label="Image :" type="url" placeholder="Image URL" onChange={() => {}}/>
      <Select label="Type:" placeholder="---" optionArray={['meal', 'diet']} onChange={() => {}}/>
      <Button title="Submit" onClick={onSend}/>
    </div>
  );
}
