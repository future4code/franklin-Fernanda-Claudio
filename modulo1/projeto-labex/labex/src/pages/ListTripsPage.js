import React from 'react';
import { Viagens } from '../components/viagens';
import { goToForm } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const ListTripsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lista das viagens!</h1>
      <button onClick={() => goToForm(navigate)}>Inscreva-se</button>
      <Viagens />
    </div>
  );
};

export { ListTripsPage };
