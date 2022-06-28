import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-claudio/login',
        body,
      )
      .then((response) => {
        console.log('Deu certo: ', response.data.token);
        localStorage.setItem('token', response.data.token);
        alert(`Bem vindo ${email}`);
        navigate('/admin/trips/list');
      })
      .catch((error) => {
        console.log('Deu errado: ', error.response);
        alert('email não cadastrado!');
      });
  };

  return (
    <div>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  );
};

export { LoginPage };
