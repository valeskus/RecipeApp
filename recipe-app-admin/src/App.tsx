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
          path="/categoryForm"
          element={<CategoryForm />}
        />
      </Routes>
      <Routes>
        <Route
          path="/productForm"
          element={<ProductForm />}
        />
      </Routes>
      <Routes>
        <Route
          path="/recipeForm"
          element={<RecipeForm />}
        />
      </Routes>

    </BrowserRouter>
  );
}
