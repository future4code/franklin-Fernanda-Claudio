import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const Input = styled.input`
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 20px;
`;
export const Etapa1 = () => {
  const options = [
    { value: 'Ensino médio incompleto', label: 'Ensino médio incompleto' },
    { value: 'Ensino Médio Completo', label: 'Ensino Médio Completo' },
    {
      value: 'Ensino Superior Incompleto',
      label: 'Ensino Superior Incompleto',
    },
    { value: 'Ensino Superior Completo', label: 'Ensino Superior Completo' },
  ];

  const MyComponent = () => <Select options={options} />;
  return (
    <div>
      <h3> ETAPA 1 - DADOS GERAIS </h3>
      <p>1. Qual o seu nome? </p>
      <Input />
      <p>2. Qual sua idade?</p>
      <Input />
      <p>3. Qual seu email?</p>
      <Input />
      <p>4. Qual sua escolaridade?</p>
      <MyComponent /> <br />
    </div>
  );
};
