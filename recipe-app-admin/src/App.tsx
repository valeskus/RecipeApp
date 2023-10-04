import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CategoryForm } from './components/CategoryForm';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { RecipeForm } from './components/RecipeForm';
import { FormManager } from './components/common/FormManager';
import { MainPage } from './components/MainPage';
import { CategoriesArrayForm } from './components/CategoryForm/components/CateroriesArrayForm';

export function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />

        <Route
          path="/formManager"
          element={<FormManager />}
        />

        <Route
          path="/categoryForm"
          element={<CategoryForm />}
        />

        <Route
          path="/categoriesArrayForm"
          element={<CategoriesArrayForm />}
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
