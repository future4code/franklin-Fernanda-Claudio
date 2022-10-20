import GlobalStyle from './GlobalStyles';
import { Sorteio } from './Sorteio';
import {
  ContainerCentral,
  TextAndLogoDiv,
  ContainerMain,
  Select,
  Nome,
  Concurso,
  ConcursoDesk,
  NomeConcurso,
  IdConcurso,
} from './style';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../images/Logo_Sena.png';
import { SideBarMobile } from './SideBarMobile';
import { SideBarDesk } from './SideBarDesk';

const Color = () => {
  const [temaSorteio, setTemaSorteio] = useState([]);
  const [input, setInput] = useState('MEGA-SENA');
  const [numeroSorteio, setNumeroSorteio] = useState(0);
  const [numeros, setNumeros] = useState(0);
  const [data, setData] = useState('10');

  const colors = {
    'MEGA-SENA': { cor: '#6BEFA3', index: 0 },
    QUINA: { cor: '#8666EF', index: 1 },
    LOTOFACIL: { cor: '#DD7AC6', index: 2 },
    LOTOMANIA: { cor: '#FFAB64', index: 3 },
    TIMEMANIA: { cor: '#5AAD7D', index: 4 },
    'DIA-DE-SORTE': { cor: '#BFAF83', index: 5 },
    'LOTERIA-FEDERAL': { cor: '#6BEFA3', index: 6 },
    'SUPER-SETE': { cor: '#6BEFA3', index: 7 },
    'DUPLA-SENA': { cor: '#6BEFA3', index: 8 },
  };
  const getTemaSorteio = () => {
    axios
      .get('https://loteriascaixa-api.herokuapp.com/api')
      .then((resposta) => {
        setTemaSorteio(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(getTemaSorteio, []);

  const getNumerosSorteados = () => {
    axios
      .get(
        `https://loteriascaixa-api.herokuapp.com/api/${input.toLowerCase()}/latest`,
      )
      .then((resposta) => {
        setNumeros(resposta.data.dezenas);
        setData(resposta.data.data);
        setNumeroSorteio(resposta.data.concurso);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  useEffect(getNumerosSorteados, [input, numeroSorteio]);

  return (
    <ContainerCentral>
      <GlobalStyle />
      <ContainerMain>
        <SideBarMobile color={colors[input].cor} />
        <Select value={input} onChange={(e) => setInput(e.target.value)}>
          {temaSorteio &&
            temaSorteio.map((sorteio) => (
              <>
                <option value={sorteio.toUpperCase()} key={sorteio}>
                  {sorteio.toUpperCase()}
                </option>
              </>
            ))}
        </Select>
        <TextAndLogoDiv>
          <img src={Logo} alt="" />
          <Nome>{input}</Nome>
        </TextAndLogoDiv>
        <Concurso>{`CONCURSO ${numeroSorteio}`}</Concurso>
        <ConcursoDesk>
          <NomeConcurso>CONCURSO</NomeConcurso>
          <IdConcurso>
            {numeroSorteio} - {data}
          </IdConcurso>
        </ConcursoDesk>
      </ContainerMain>
      <SideBarDesk color={colors[input].cor} />
      <Sorteio numbers={numeros} />
    </ContainerCentral>
  );
};
export default Color;
