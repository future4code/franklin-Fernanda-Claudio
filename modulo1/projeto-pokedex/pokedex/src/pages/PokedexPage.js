import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';

export const PokedexPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
      <p>Pokedex</p>
    </div>
  );
};
