import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'Lorran'}
            fotoUsuario={'https://picsum.photos/55/20'}
            fotoPost={'https://picsum.photos/290/150'}
          />
          <Post
            nomeUsuario={'Maria'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/150/170'}
          />
          <Post
            nomeUsuario={'José'}
            fotoUsuario={'https://picsum.photos/40/60'}
            fotoPost={'https://picsum.photos/100/160'}
          />
        </MainContainer>
)

}


export default App;
