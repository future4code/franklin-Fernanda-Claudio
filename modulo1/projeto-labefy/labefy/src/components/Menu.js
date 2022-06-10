/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BiHomeAlt,
  BiSearchAlt2,
  BiLibrary,
  BiBookAdd,
  BiHeart,
  BiHeadphone,
} from 'react-icons/bi';
import styled from 'styled-components';
import { Inicio } from './Inicio';
import { Buscar } from './Buscar';
import { Biblioteca } from './Biblioteca';
import { NovaPlaylist } from './NovaPlaylist';
import React, { useState } from 'react';
//import { IconContext } from 'react-icons';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
const MenuLateral = styled.div`
  background-color: black;
  width: 200px;
`;
const ConteudoPrincipal = styled.div`
  color: white;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(254, 126, 1, 0.9920343137254902) 100%
  );
  //background-color: #181818;
  width: 100vw;
`;
const Card = styled.div`
  align-items: flex-end;

  font-weight: bold;
  display: flex;
  gap: 10px;
  margin: 20px 0px 8px 0px;
  color: white;
  text-decoration: none;
  text-align: flex-start;
  padding-left: 15px;
`;
function Menu() {
  const [section, setSection] = useState('inicio');

  const vaiParaInicio = () => {
    setSection('inicio');
  };
  const vaiParaBuscar = () => {
    setSection('buscar');
  };
  const vaiParaBiblioteca = () => {
    setSection('biblioteca');
  };
  const vaiParaNovaPlaylist = () => {
    setSection('NovaPlaylist');
  };
  const RenderizaSection = () => {
    switch (section) {
      case 'inicio':
        return <Inicio />;
        break;
      case 'buscar':
        return <Buscar />;
        break;
      case 'biblioteca':
        return <Biblioteca />;
        break;
      case 'NovaPlaylist':
        return <NovaPlaylist />;
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <MenuLateral>
        <a onClick={vaiParaInicio}>
          {/* <IconContext.Provider
            value={{ size: '1.3em', className: 'global-class-name' }}
          /> */}
          <Card>
            <BiHomeAlt />
            Inicio
          </Card>
        </a>
        <a onClick={vaiParaBuscar}>
          <Card>
            <BiSearchAlt2 />
            Buscar
          </Card>
        </a>
        <a onClick={vaiParaBiblioteca}>
          <Card>
            <BiLibrary />
            Sua Biblioteca
          </Card>
        </a>
        <br />
        <a onClick={vaiParaNovaPlaylist}>
          <Card>
            <BiBookAdd />
            Criar playlist
          </Card>
        </a>
        <Card>
          <BiHeart />
          Favoritos
        </Card>
        <Card>
          <BiHeadphone />
          PodCast
        </Card>
      </MenuLateral>

      <ConteudoPrincipal>{RenderizaSection()}</ConteudoPrincipal>
    </Container>
  );
}

export default Menu;
