import React from 'react';
import * as Redux from 'react-redux';

import { useCategoriesStore } from './stores/categories';
import { CategoriesStateType } from './stores/categories/types';
import { getCategories, postCategory } from './stores/categories/categoriesSlice';
import { CategoryPostModel } from './stores/categories/types';

export function App() {
  const {  create }: CategoriesStateType = useCategoriesStore();
  const dispatch = Redux.useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

  React.useEffect(() => {
    if (create.status === 'Created') {
      alert('Created successful!');
    }
  }, [create.status]);

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

  const onSend = () => {
    dispatch(postCategory(category));
  };

  return (
    <div className="App" >
      <p >'Categories'</p>
      <button onClick={onSend}>SEND</button>
      <p>'HELLO'</p>
    </div>
  );
}
