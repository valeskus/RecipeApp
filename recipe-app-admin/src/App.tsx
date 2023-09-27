import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CategoryForm } from './components/CategoryForm';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { RecipeForm } from './components/RecipeForm';

export function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<div><p>Hello</p></div>}
        />

        <Route
          path="/categoryForm"
          element={<CategoryForm />}
        />

        <Route
          path="/productForm"
          element={<ProductForm />}
        />

        <Route
          path="/recipeForm"
          element={<RecipeForm />}
        />
      </Routes>

    </BrowserRouter>
  );
}
