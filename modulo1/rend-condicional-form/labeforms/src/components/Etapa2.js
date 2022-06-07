import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 20px;
`;
export const Etapa2 = () => {
  return (
    <div>
      <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3>
      <p>5. Qual Curso?</p>
      <Input type="text" />
      <p>6. Qual unidade de ensino?</p>
      <Input type="text" /> <br />
    </div>
  );
};
