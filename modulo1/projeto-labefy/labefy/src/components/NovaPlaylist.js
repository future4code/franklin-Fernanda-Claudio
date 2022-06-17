import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdOutlineLibraryMusic, MdDeleteForever } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 35px;
  justify-content: space-evenly;
`;
const Card = styled.div`
  font-size: 18px;
  padding-top: 15px;
  font-weight: bold;
  width: 20%;
  height: 85px;
  background-color: #b6b6ce;
  color: #212131;
  margin: 0px 10px 10px 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: #ffffff00;
  border: none;
  &:hover {
    cursor: pointer;
  }
  padding: 2px;
`;
const ContainerButton = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: space-around;
`;

const ButtonInput = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #b6b6ce;
  cursor: pointer;
`;

const Input = styled.input`
  border-radius: 7px;
  border: 2px solid #b6b6ce;
`;

const NovaPlaylist = () => {
  const [playlists, setPlaylist] = useState([]);
  const [playlistDigitada, setPlaylistDigitada] = useState('');
  const [adicionaMusica, setAdicionaMusica] = useState(false);
  const [nomeMusica, setNomeMusica] = useState('');
  const [artista, setArtista] = useState('');
  const [url, setUrl] = useState('');
  const [pegaMusicas, setPegaMusicas] = useState([]);
  const [playlistSelecionada, setPlaylistSelecionada] = useState('');

  const pegaPlaylist = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
          headers: {
            Authorization: 'fernanda-claudio-franklin',
          },
        },
      )
      .then((resposta) => {
        setPlaylist(resposta.data.result.list);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(pegaPlaylist, []);

  const criaPlaylist = () => {
    const body = {
      name: playlistDigitada,
    };

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        body,
        {
          headers: {
            Authorization: 'fernanda-claudio-franklin',
          },
        },
      )
      .then((response) => {
        console.log(response);
        setPlaylistDigitada('');
        pegaPlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletaPlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: 'fernanda-claudio-franklin',
          },
        },
      )
      .then((resposta) => {
        alert('Playlist deletada com sucesso');
        pegaPlaylist();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  useEffect(pegaPlaylist, []);

  const onChangeInputValue = (event) => {
    setPlaylistDigitada(event.target.value);
  };

  const pegarMusicasPlaylist = (playlistId) => {
    const body = {
      name: nomeMusica,
      artist: artista,
      url: url,
    };
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: 'fernanda-claudio-franklin',
          },
        },
      )
      .then((resposta) => {
        setPegaMusicas(resposta.data.result.list);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const adicionarMusica = (playlistId) => {
    const body = {
      name: nomeMusica,
      artist: artista,
      url: url,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        {
          headers: {
            Authorization: 'fernanda-claudio-franklin',
          },
        },
      )
      .then((resposta) => {
        alert('Musica Adicionada com Sucesso!');
        setPegaMusicas(resposta.data.result.list);
        setNomeMusica('');
        console.log(playlistId);
        setArtista('');
        setUrl('');
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(pegaPlaylist, []);

  const onChangeInputNome = (event) => {
    setNomeMusica(event.target.value);
  };
  const onChangeInputArtista = (event) => {
    setArtista(event.target.value);
  };
  const onChangeInputUrl = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <div>
          <h2>Crie sua Nova Playlist</h2>
          <Input
            value={playlistDigitada}
            placeholder={'Nome da playlist'}
            onChange={onChangeInputValue}
          />
          <ButtonInput onClick={criaPlaylist}>Criar</ButtonInput>
        </div>
        <Container>
          {playlists.map((playlist) => {
            const addMusica = (playlistSelect) => {
              setPlaylistSelecionada(playlistSelect);
              setAdicionaMusica(!adicionaMusica);
            };
            return (
              <Card key={playlist.id}>
                {playlist.name}
                <ContainerButton>
                  <Button onClick={() => addMusica(playlist.id)}>
                    {' '}
                    <IconContext.Provider
                      value={{
                        size: '1.6em',
                        color: 'white',
                        className: 'global-class-name',
                      }}
                    >
                      <MdOutlineLibraryMusic />
                    </IconContext.Provider>
                  </Button>
                  <Button onClick={() => deletaPlaylist(playlist.id)}>
                    <IconContext.Provider
                      value={{
                        size: '1.6em',
                        color: 'white',
                        className: 'global-class-name',
                      }}
                    >
                      <MdDeleteForever />
                    </IconContext.Provider>
                  </Button>
                </ContainerButton>

                {pegaMusicas.map((musicas) => (
                  <li key={musicas.id()}>{musicas.name}</li>
                ))}

                {adicionaMusica === true &&
                playlistSelecionada === playlist.id ? (
                  <div>
                    <h2>Adicione musicas a sua Playlist!</h2>
                    <input
                      value={nomeMusica}
                      placeholder={'Nome'}
                      onChange={onChangeInputNome}
                    />{' '}
                    <input
                      value={artista}
                      placeholder={'Artista'}
                      onChange={onChangeInputArtista}
                    />
                    <input
                      value={url}
                      placeholder={'Url'}
                      onChange={onChangeInputUrl}
                    />
                    <button onClick={() => adicionarMusica(playlist.id)} />
                  </div>
                ) : (
                  ''
                )}
              </Card>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export default NovaPlaylist;
