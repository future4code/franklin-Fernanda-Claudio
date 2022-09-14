import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

const IconImage = styled.img`
  margin-right: 5px;
`;

export function SecaoCompartilhar(props) {
  const [inputComentario, setInputComentario] = useState('');
  const handleInputComentario = (event) => {
    setInputComentario(event.target.value);
    console.log(inputComentario);
  };

  return (
    <div>
      <IconImage alt={'Icone'} src={facebook} onClick={props.onClickShare} />
      <IconImage alt={'Icone'} src={instagram} onClick={props.onClickShare} />
      <IconImage alt={'Icone'} src={twitter} onClick={props.onClickShare} />

      <InputComentario
        placeholder={'Comentário'}
        value={inputComentario}
        onChange={handleInputComentario}
      />
      <button onClick={props.aoEnviar}>Enviar</button>
    </div>
  );
}
