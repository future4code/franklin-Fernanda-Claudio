import React from 'react';
import { goToList, goToLogin } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Bem vindo ao LABEX!</h1>
      <p>Escolha uma das opcoes abaixo</p>
      <button onClick={() => goToLogin(navigate)}>Área Administrativa</button>
      <button onClick={() => goToList(navigate)}>Lista de Viagens</button>{' '}
    </div>
  );
};

export { HomePage };
