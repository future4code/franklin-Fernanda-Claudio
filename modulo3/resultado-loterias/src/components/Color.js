import GlobalStyle from './GlobalStyles';
import { Sorteio } from './Sorteio';
import { Container, ContainerCentral } from './style';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Color = () => {
  const [temaSorteio, setTemaSorteio] = useState([]);

  const getTemaSorteio = () => {
    axios
      .get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')
      .then((resposta) => {
        setTemaSorteio(resposta.data[0].nome);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(getTemaSorteio, []);

  return (
    <ContainerCentral>
      <GlobalStyle />
      <Container color="#6BEFA3">
        <p>{temaSorteio}</p>
      </Container>
      <Sorteio numbers={'1'} />
    </ContainerCentral>
  );
};
export default Color;
