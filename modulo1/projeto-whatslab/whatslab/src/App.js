import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
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
  font-weight: bold;
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
const BalaoMensagem = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  color: #03045e;
  list-style: none;
  background-color: white;
  max-width: 60%;
  min-width: 8%;
  margin: 8px;
  word-wrap: break-word;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  //background-color: rgba(142, 227, 239, 0.5);
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 400;
  line-height: 1.3;
`;
const BalaoMensagemEu = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  color: #03045e;
  list-style: none;
  background-color: white;
  max-width: 60%;
  min-width: 8%;
  margin: 8px;
  word-wrap: break-word;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  background-color: #ccffcc;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 400;
  line-height: 1.3;
`;

const ContainerNome = styled.div`
  color: #8a2be2;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
`;

function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    {
      nome: 'Administrador',
      texto: 'Olá, comece a enviar suas mensagens agora mesmo!',
    },
  ]);

  const ListaDeMensagens = mensagens.map((mensagem) => {
    const removeMensagem = () => {
      const novaListaMensagem = [...mensagens];
      const index = novaListaMensagem.findIndex(
        (Element) => Element === mensagem,
      );
      novaListaMensagem.splice(index, 1);
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Tem certeza que deseja deletar essa mensagem?') === true) {
        setMensagens(novaListaMensagem);
      }
    };
    if (
      mensagem.nome === 'eu' ||
      mensagem.nome === 'Eu' ||
      mensagem.nome === 'eU' ||
      mensagem.nome === 'EU'
    ) {
      return (
        <BalaoMensagemEu onDoubleClick={removeMensagem}>
          <div>{mensagem.texto}</div>
        </BalaoMensagemEu>
      );
    } else {
      return (
        <BalaoMensagem onDoubleClick={removeMensagem}>
          <ContainerNome>{mensagem.nome}</ContainerNome>
          <div>{mensagem.texto}</div>
        </BalaoMensagem>
      );
    }
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
    setInputMensagem('');
    setInputNome('');
  };

  const handleKeyPressE = (handleKeyPressE) => {
    if (handleKeyPressE.key === 'Enter') {
      const novaMensagem = { nome: inputNome, texto: inputMensagem };
      const novaListaMensagens = [...mensagens];
      novaListaMensagens.push(novaMensagem);
      setMensagens(novaListaMensagens);
      setInputMensagem('');
      setInputNome('');
    }
  };

  return (
    <Container>
      {ListaDeMensagens}
      <Card>
        <UsuarioStyle
          onKeyPress={handleKeyPressE}
          type="text"
          value={inputNome}
          onChange={handleInputNome}
          placeholder="Usuário"
        />
        <MensagemStyle
          onKeyPress={handleKeyPressE}
          value={inputMensagem}
          onChange={handleInputMensagem}
          placeholder="Mensagem"
        />
        <ButtonEnter onKeyPress={handleKeyPressE} onClick={inserirMensagem}>
          Enviar
        </ButtonEnter>
      </Card>
    </Container>
  );
}

export default App;
