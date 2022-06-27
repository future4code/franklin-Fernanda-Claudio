import React from 'react';
import { goToHomeAdmin } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Realize seu Login </h1>
      <p>Email </p>
      <input value={''} placeholder={''} onChange={''} />
      <p>Senha </p>
      <input value={''} placeholder={''} onChange={''} />
      <button onClick={() => goToHomeAdmin(navigate)}>Entrar</button>
    </div>
  );
};

export { LoginPage };
