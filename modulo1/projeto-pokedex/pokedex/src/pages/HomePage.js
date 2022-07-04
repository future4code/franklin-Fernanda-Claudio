import * as React from 'react';
import styled from 'styled-components';
import { CardPokemons } from '../components/CardPokemons';
import { useNavigate } from 'react-router-dom';
import { goToList } from '../routes/coordinator';

const Header = styled.div`
  display: flex;
  color: #ffd500;
  background-color: #00509d;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  justify-content: center;
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  left: 20px;
  margin-top: 28px;
`;

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header>
        <Button onClick={() => goToList(navigate)}>Pokedex</Button>
        <h1>Lista de Pokémons</h1>
      </Header>
      <CardPokemons />
    </div>
  );
};
