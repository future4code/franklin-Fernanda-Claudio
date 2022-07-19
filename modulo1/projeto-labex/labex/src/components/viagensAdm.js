import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
import axios from 'axios';

export const ViagensAdm = () => {
  const CardViagem = styled.div`
    border: 1px solid black;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 25%;
    margin-bottom: 20px;
  `;
  const Delete = styled.button``;
  const [viagens, error, isLoading] = useRequestData(
    `${BASE_URL}fernanda-claudio/trips`,
  );

  const deleteItem = (id) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: {
          ContentType: 'application/json',
          auth: token,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(id);
      })
      .catch((error) => console.log(error));
  };

  const DetalheViagem = (id) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: {
          ContentType: 'application/json',
          auth: token,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading &&
        viagens &&
        viagens.length >= 0 &&
        viagens.map((viagem) => {
          return (
            <CardViagem key={viagem.id}>
              <p> {viagem.name}</p>
              <p> {viagem.description}</p>
              <p> {viagem.date}</p>
              <Delete onClick={() => DetalheViagem(viagem.id)}>Ver</Delete>
              <Delete onClick={() => deleteItem(viagem.id)}>x</Delete>
            </CardViagem>
          );
        })}
    </div>
  );
};
