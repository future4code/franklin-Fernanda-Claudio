import './App.css';
import React, { useState } from 'react';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Final } from './components/Final';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [etapa, setEtapa] = useState(1);

  const RenderizaEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Final />;
        break;
      default:
        break;
    }
  };
  const irParaProximaEtapa = () => {
    setEtapa(etapa + 1);
  };
  return (
    <Container>
      <h1>LabeForm</h1>
      {RenderizaEtapa()}
      {etapa < 4 ? (
        <button onClick={irParaProximaEtapa}>Próxima Etapa</button>
      ) : (
        ''
      )}
    </Container>
  );
}

export default App;
