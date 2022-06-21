import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [userslists, setUserslists] = useState([]);
  const [inputUserslist, setInputUserslist] = useState('');
  const [valorInputEmail, setvalorInputEmail] = useState('');

  const pegaUserslist = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'naiara-gomes-franklin',
          },
        },
      )
      .then((response) => {
        setUserslists(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const criaUserslist = () => {
    const body = {
      name: inputUserslist,
      valorInputEmail,
    };
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'naiara-gomes-franklin',
          },
        },
      )
      .then((response) => {
        console.log(response);
        pegaUserslist();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputNome = (event) => {
    setInputUserslist(event.target.value);
  };
  const handleInputEmail = (event) => {
    setvalorInputEmail(event.target.value);
  };

  useEffect(pegaUserslist, []);

  return (
    <div className="App">
      <input
        value={inputUserslist}
        onChange={handleInputNome}
        placeholder={'Nome'}
      ></input>
      <input
        value={valorInputEmail}
        onChange={handleInputEmail}
        placeholder={'Email'}
      ></input>

      <button onClick={criaUserslist}>Cadastrar usuário</button>
      {userslists.map((userslist) => {
        return <li key={userslist.id}>{userslist.name}</li>;
      })}
    </div>
  );
};

export default App;
