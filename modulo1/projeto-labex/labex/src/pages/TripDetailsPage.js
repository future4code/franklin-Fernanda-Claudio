import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLastPage } from '../routes/coordinator';

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

export const TripDetailsPage = (props) => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

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

  return (
    <div>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
      <p>
        {state ? (
          <p>
            <p>{state.date}</p>
            <p>{state.description}</p>
            <p>{state.durationInDays}</p>
            <p>{state.planet}</p>
            <p>{state.name}</p>
          </p>
        ) : (
          <p>false</p>
        )}
      </p>
    </div>
  );
};
