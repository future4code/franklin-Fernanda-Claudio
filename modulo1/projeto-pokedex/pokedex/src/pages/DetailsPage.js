import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';

export const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
      <p>Detalhes</p>
    </div>
  );
};
