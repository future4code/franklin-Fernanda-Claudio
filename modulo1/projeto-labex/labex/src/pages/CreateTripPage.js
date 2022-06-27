import React from 'react';

const CreateTripPage = () => {
  return (
    <div className="page">
      <h2>Criar Viagem</h2>
      <form action="">
        <input type="text" placeholder="Nome" required />
        <br />
        <select placeholder="Planeta" required>
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
        <br />
        <input type="date" required />
        <br />
        <input type="text" placeholder="Descrição" required />
        <br />
        <input type="text" placeholder="Duração em dias" required />
        <br />
        <div>
          <button onClick={'POST'}>Criar</button>
        </div>
      </form>
    </div>
  );
};

export { CreateTripPage };
