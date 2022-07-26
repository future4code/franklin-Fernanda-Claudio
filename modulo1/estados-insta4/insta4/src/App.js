import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [arrayPosts, setArrayPosts] = useState([
    {
      nomeUsuario: 'Lorran',
      fotoUsuario: 'https://picsum.photos/55/20',
      fotoPost: 'https://picsum.photos/280/150',
    },
    {
      nomeUsuario: 'Maria',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/150/170',
    },
  ]);

  const [inputNomeUsuario, setInputNomeUsuario] = useState('');
  const [inputFotoUsuario, setInputFotoUsuario] = useState('');
  const [inputFotoPost, setInputFotoPost] = useState('');

  const adicionaPost = () => {
    const novoPost = {
      nomeUsuario: inputNomeUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost,
    };
    const listaPosts = [...arrayPosts, novoPost];
    setArrayPosts(listaPosts);
    setInputNomeUsuario('');
    setInputFotoUsuario('');
    setInputFotoPost('');
  };
  const onChangeNomeUsuario = (event) => {
    setInputNomeUsuario(event.target.value);
  };
  const onChangeFotoUsuario = (event) => {
    setInputFotoUsuario(event.target.value);
  };
  const onChangeFotoPost = (event) => {
    setInputFotoPost(event.target.value);
  };
  const listaPublicacoes = arrayPosts.map((post) => {
    return (
      <MainContainer>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </MainContainer>
    );
  });
  return (
    <div>
      <MainContainer>
        <input
          value={inputNomeUsuario}
          onChange={onChangeNomeUsuario}
          placeholder={'Usuario'}
        />
        <input
          value={inputFotoUsuario}
          onChange={onChangeFotoUsuario}
          placeholder={'Foto Usuário'}
        />
        <input
          value={inputFotoPost}
          onChange={onChangeFotoPost}
          placeholder={'Foto Post'}
        />
        <button onClick={adicionaPost}>Adicionar</button>
      </MainContainer>

      <div>{listaPublicacoes}</div>
    </div>
  );
}
export default App;
