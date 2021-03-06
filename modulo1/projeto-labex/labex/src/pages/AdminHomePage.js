import React from 'react';
import { ViagensAdm } from '../components/viagensAdm';
import { goToCreateTrip, goToDetailsTrip } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem vindo Administrador !</h1>
      <button onClick={() => goToCreateTrip(navigate)}>Criar</button>
      <button onClick={() => goToDetailsTrip(navigate)}>Detalhes</button>
      <ViagensAdm />
    </div>
  );
};

export { AdminHomePage };
