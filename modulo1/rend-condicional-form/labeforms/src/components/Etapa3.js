import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Input = styled.input`
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 20px;
`;
export const Etapa3 = () => {
  const options = [
    { value: 'Curso Tecnico', label: 'Curso Tecnico' },
    { value: 'Curso de Inglês', label: 'Curso de Inglês' },
  ];

  const MyComponent = () => <Select options={options} />;
  return (
    <div>
      <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
      <p>5. Por que você não terminou um curso de graduação?</p>
      <Input type="text" />
      <p>6. Você fez algum curso complementar?</p>
      <MyComponent /> <br />
    </div>
  );
};
