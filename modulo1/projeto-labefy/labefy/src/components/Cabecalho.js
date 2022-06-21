import React from 'react';
import styled from 'styled-components';
import { ImSpotify } from 'react-icons/im';
import { IconContext } from 'react-icons';

export function Cabecalho() {
  const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 60px;
    font-weight: bold;
    font-size: 25px;
    min-height: 10vh;
    gap: 5px;
  `;
  return (
    <div>
      <Container>
        LABEFY
        <IconContext.Provider
          value={{
            size: '1em',
            color: '#b6b6ce',
          }}
        >
          <ImSpotify />
        </IconContext.Provider>
      </Container>
    </div>
  );
}
