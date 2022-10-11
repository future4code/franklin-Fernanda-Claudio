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
  const [input, setInput] = useState(['MEGA-SENA']);
  const [numeroSorteio, setNumeroSorteio] = useState({ concursoId: 0 });
  const [numeros, setNumeros] = useState(0);
  const [data, setData] = useState('10');

  const colors = {
    'MEGA-SENA': { cor: '#6BEFA3', index: 0 },
    QUINA: { cor: '#8666EF', index: 1 },
    LOTOFÁCIL: { cor: '#DD7AC6', index: 2 },
    LOTOMANIA: { cor: '#FFAB64', index: 3 },
    TIMEMANIA: { cor: '#5AAD7D', index: 4 },
    'DIA DE SORTE': { cor: '#BFAF83', index: 5 },
  };
  const getTemaSorteio = () => {
    axios
      .get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')
      .then((resposta) => {
        setTemaSorteio(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(getTemaSorteio, []);

  const getLoteriasConcurso = () => {
    axios
      .get(
        'https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos',
      )
      .then((resposta) => {
        setNumeroSorteio(resposta.data[colors[input].index]);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(getLoteriasConcurso, [input]);

  const getNumerosSorteados = () => {
    axios
      .get(
        `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${numeroSorteio.concursoId}`,
      )
      .then((resposta) => {
        setNumeros(resposta.data.numeros);
        console.log('sem modificar', resposta.data.data);
        console.log('modificando', modificarArray(resposta.data.data));
        setData(modificarArray(resposta.data.data));
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  useEffect(getNumerosSorteados, [input, numeroSorteio]);

  const modificarArray = (data) => {
    const resultado = data.split('-');
    const mes = resultado[1];
    const ano = resultado[0];
    const day = resultado[2].toString().substring(0, 2);
    const date = `${day}/${mes}/${ano}`;
    return date;
  };

  return (
    <ContainerCentral>
      <GlobalStyle />
      <ContainerMain>
        <SideBarMobile color={colors[input].cor} />
        <Select value={input} onChange={(e) => setInput(e.target.value)}>
          {temaSorteio &&
            temaSorteio.map((sorteio) => (
              <>
                <option value={sorteio.nome.toUpperCase()} key={sorteio.id}>
                  {sorteio.nome.toUpperCase()}
                </option>
              </>
            ))}
        </Select>
        <TextAndLogoDiv>
          <img src={Logo} alt="" />
          <Nome>{input}</Nome>
        </TextAndLogoDiv>
        <Concurso>{`CONCURSO ${numeroSorteio.concursoId}`}</Concurso>
        <ConcursoDesk>
          <NomeConcurso>CONCURSO</NomeConcurso>
          <IdConcurso>
            {numeroSorteio.concursoId} - {data}
          </IdConcurso>
        </ConcursoDesk>
      </ContainerMain>
      <SideBarDesk color={colors[input].cor} />
      <Sorteio numbers={numeros} />
    </ContainerCentral>
  );
};
export default Color;
