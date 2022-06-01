import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
function App() {
  const StyledMessage = styled.p`
    color: #03045e;
    list-style: none;
    background-color: white;
    border-radius: 10px;
    max-width: 70%;
    margin: 8px;
    padding: 8px;
    background-color: rgba(142, 227, 239, 0.5);
  `;

  const [inputNome, setInputNome] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      nome: 'Administrador',
      texto: 'Olá, comece a enviar suas mensagens agora mesmo!',
    },
  ]);
  const ListaDeMensagens = mensagens.map((mensagem) => {
    return (
      <StyledMessage key={mensagem.id}>
        {mensagem.nome}: {mensagem.texto}
      </StyledMessage>
    );
  });
  const handleInputNome = (event) => {
    setInputNome(event.target.value);
  };
  const handleInputMensagem = (event) => {
    setInputMensagem(event.target.value);
  };
  const inserirMensagem = () => {
    const novaMensagem = { nome: inputNome, texto: inputMensagem };
    const novaListaMensagens = [...mensagens];
    novaListaMensagens.push(novaMensagem);
    setMensagens(novaListaMensagens);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 48%;
    height: 100vh;
    border: 1px solid black;
    margin: 0px auto;
    background-color: #37718e;
  `;

  const Card = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 8px 8px;
  `;

  const UsuarioStyle = styled.input`
    width: 15%;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
  `;

  const MensagemStyle = styled.input`
    width: 65%;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
  `;

  const ButtonEnter = styled.button`
    background-color: #254e70;
    border: 1px solid white;
    color: white;
    width: 20%;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
  `;

  return (
    <Container>
      {ListaDeMensagens}
      <Card>
        <UsuarioStyle
          autoFocus
          type="text"
          value={inputNome}
          onChange={handleInputNome}
          placeholder="Usuário"
        />
        <MensagemStyle
          value={inputMensagem}
          onChange={handleInputMensagem}
          placeholder="Mensagem"
        />
        <ButtonEnter onClick={inserirMensagem}>Enviar</ButtonEnter>
      </Card>
    </Container>
  );
}

export default App;
