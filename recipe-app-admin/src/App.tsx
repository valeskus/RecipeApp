import React from 'react';
import * as Redux from 'react-redux';

import { useCategoriesStore, useGetCategories } from './stores/categories';
import { CategoryListModel } from './models';

export function App() {
  const { categories }: CategoryListModel = useCategoriesStore();
  const dispatch = Redux.useDispatch();
  const getCategories = useGetCategories();
  React.useEffect(() => {
    getCategories(dispatch);
  }, []);

  return (
    <div className="App" >
      <p>'Categories'</p>
      {categories.length > 0 ? (
        categories.map((category) => {
          return (<p key={category.id}>{category.title}</p>);
        })
      ) : (<h1>'empty'</h1>)
      }
      <p>'HELLO'</p>
    </div>
  );
}
