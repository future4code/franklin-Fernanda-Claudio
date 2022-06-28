import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      console.log('Não está logado!!!');
      navigate('/login');
    }
  }, []);
};

export const TripDetailsPage = () => {
  const [state, setState] = useState([]);

  useProtectedPage();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-claudio/trip/LtXgPCXHDJ8A6CDHEwHw',
        {
          headers: {
            auth: token,
          },
        },
      )
      .then((response) => {
        console.log(response.data.trip);
        setState(response.data.trip);
      })
      .catch((error) => {
        console.log('Deu erro: ', error.response);
      });
  }, []);
  console.log(state);
  return (
    <div>
      <p>{state.name}</p>
      <p>{state.date}</p>
      <p>{state.description}</p>
      <p>{state.durationInDays}</p>
      <p>{state.planet}</p>
      <p>{state.name}</p>
      <h4>Candidatos</h4>
      <p>{state.candidates[0].name}</p>
      <p>{state.candidates[0].age}</p>
      <p>{state.candidates[0].country}</p>
      <p>{state.candidates[0].profession}</p>
      <p>{state.candidates[0].applicationText}</p>
    </div>
  );
};
