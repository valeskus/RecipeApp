import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CategoryForm } from './components/CategoryForm';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { RecipeForm } from './components/RecipeForm';
import { MainPage } from './components/MainPage';
import { FileForm } from './components/FileForm';
import { ImageForm } from './components/ImageForm';

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
          path="/categoryForm"
          element={<CategoryForm />}
        />

        <Route
          path="/fileForm"
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
        <Route
          path="/imageForm"
          element={<ImageForm />}
        />

      </Routes>

    </BrowserRouter>
  );
}
