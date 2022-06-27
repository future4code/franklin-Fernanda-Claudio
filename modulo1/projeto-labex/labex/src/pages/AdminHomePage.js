import React from 'react';
import { Viagens } from '../components/viagens';
import { goToCreateTrip } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem vindo Administrador !</h1>
      <button onClick={() => goToCreateTrip(navigate)}>Criar</button>
      <Viagens />
      <h1>Criar viagem</h1>
    </div>
  );
};

export { AdminHomePage };
