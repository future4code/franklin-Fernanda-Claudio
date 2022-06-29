import React from 'react';
import { goToLastPage } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const CreateTripPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
      <h2>Criar Viagem</h2>
      <form onSubmit={''}>
        <p>Nome: </p>
        <input
          type="text"
          pattern={'^.{5,}'}
          title="No minimo 5 letras"
          required
        />
        <p>Planeta</p>
        <select required>
          <option value disabled selected>
            Escolha um Planeta
          </option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
          <option value="Plutão">Plutão</option>
        </select>
        <p>Data: </p>
        <input
          type="date"
          pattern={''}
          title="Deve conter uma data no futuro"
          required
        />
        <p>Descrição: </p>
        <input
          type="text"
          pattern={'^.{30,}'}
          title="No minimo 30 letras"
          required
        />
        <p>Duração em dias</p>
        <input type={'number'} min={50} required />
        <br />
        <button>Criar</button>
      </form>
    </div>
  );
};

export { CreateTripPage };
