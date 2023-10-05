import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CategoryForm } from './components/CategoryForm';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { RecipeForm } from './components/RecipeForm';
import { FormManager } from './components/common/FormManager';
import { MainPage } from './components/MainPage';
import { FileForm } from './components/FileForm';

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
          path="/FileForm"
          element={<FileForm />}
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
