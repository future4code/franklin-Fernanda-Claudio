import React from 'react';
import styled from 'styled-components';
import logo from '../logo192.png';
export function Cabecalho() {
  const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
    font-size: 25px;
    min-height: 10vh;
  `;
  return (
    <div>
      <Container>LEBEFY</Container>
    </div>
  );
}
