import React from 'react';
import styled from 'styled-components';
const ApplicationFormPage = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Input = styled.input`
    max-width: 20%;
    margin-left: 40%;
    margin-right: 40%;
  `;
  return (
    <Container>
      <h1>Formulário para viagens!</h1>
      <p>Nome </p>
      <Input value={''} placeholder={''} onChange={''} />
      <p>Idade </p>
      <Input value={''} placeholder={''} onChange={''} />
      <p>Por que devo ser escolhido? </p>
      <Input value={''} placeholder={''} onChange={''} />
      <p>Profissao </p>
      <Input value={''} placeholder={''} onChange={''} />
      <p>Pais </p>
      <Input value={''} placeholder={''} onChange={''} />
      <p>Viagem </p>
      <Input value={''} placeholder={''} onChange={''} />
    </Container>
  );
};

export { ApplicationFormPage };
