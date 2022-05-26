import React from 'react';
import styled from 'styled-components';

const SmallContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 70px;
    width: 40%;
`
const Img = styled.img `
    width: 35px;
    margin-right: 10px;
    border-radius: 70%;
`
const Title = styled.p `
    font-weight: bold;
    padding-right: 5px;
`

function CardPequeno(props) {
    return(
        <SmallContainer>
            <Img src={ props.imagem } />
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
        </SmallContainer>
    )
}

export default CardPequeno;