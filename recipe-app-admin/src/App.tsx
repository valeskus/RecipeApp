import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CategoryForm } from './components/Categories';
import { Header } from './components/Header';

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
      {/* <Routes>
        <Route
          path="/categoryForm"
          element={<CategoryForm />}
        />
      </Routes>
      <Routes>
        <Route
          path="/categoryForm"
          element={<CategoryForm />}
        />
      </Routes> */}

    </BrowserRouter>
  );
}
