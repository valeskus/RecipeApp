import React from 'react';
import * as Redux from 'react-redux';

import { useCategoriesStore } from './stores/categories';
import { CategoriesStateType } from './stores/categories/types';
import { getCategories } from './stores/categories/categoriesSlice';

export function App() {
  const { categories }: CategoriesStateType = useCategoriesStore();
  const dispatch = Redux.useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="App" >
      <p>'Categories'</p>
      {categories.isLoading ? (<h1>'Loading'</h1>) : categories.data ? (
        categories.data.map((category) => {
          return (<p key={category.id}>{category.title}</p>);
        })
      ) : (<h1>'empty'</h1>)
      }
      <p>'HELLO'</p>
    </div>
  );
}
