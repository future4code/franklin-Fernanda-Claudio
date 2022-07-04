import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';
import { PokedexPage } from '../pages/PokedexPage';
import { DetailsPage } from '../pages/DetailsPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex/list" element={<PokedexPage />} />
        <Route path="/pokedex/details" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
