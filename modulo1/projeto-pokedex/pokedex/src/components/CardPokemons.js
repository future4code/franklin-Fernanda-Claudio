import React from 'react';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../routes/coordinator';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  //box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 5px;
  button {
    padding: 4px 8px;
  }
`;
export const CardPokemons = () => {
  const navigate = useNavigate();
  const [pokemons, error, isLoading] = useRequestData(`${BASE_URL}`);
  return (
    <Container>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Ocorreu um erro</p>}
      {!isLoading &&
        pokemons &&
        pokemons.length >= 0 &&
        pokemons.map((pokemon) => {
          return (
            <Conteudo key={pokemon.id}>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                alt=""
              />
              <p>{pokemon.name}</p>
              <Buttons>
                <button>Adicionar a Pokédex</button>
                <button onClick={() => goToDetails(navigate)}>Detalhes</button>
              </Buttons>
            </Conteudo>
          );
        })}
    </Container>
  );
};
