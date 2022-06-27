import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const useViagem = () => {
  const [viagem, setViagem] = useState([]);

  const getViagem = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-claudio/trips
      `,
      )
      .then((response) => {
        setViagem(response.data).catch((error) => {
          console.log(error);
        });
      });
  };

  useEffect(getViagem, []);
  return viagem;
};
