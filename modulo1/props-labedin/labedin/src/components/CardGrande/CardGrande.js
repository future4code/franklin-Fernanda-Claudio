import React from 'react';
import styled from 'styled-components';

const BigcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Img = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Title = styled.h4 `
margin-bottom: 15px;
` 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start; 
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <Img src={ props.imagem } />
            <Container>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </Container>
        </BigcardContainer>
    )
}

export default CardGrande;