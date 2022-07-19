import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
export const Viagens = () => {
  const CardViagem = styled.div`
    border: 1px solid black;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 25%;
    margin-bottom: 20px;
  `;

  const [viagens, error, isLoading] = useRequestData(
    `${BASE_URL}fernanda-claudio/trips`,
  );
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
            </CardViagem>
          );
        })}
    </div>
  );
};
