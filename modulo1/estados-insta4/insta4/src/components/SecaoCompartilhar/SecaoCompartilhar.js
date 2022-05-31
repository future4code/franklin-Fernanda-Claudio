import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const secao = styled.p`
    width: 100%;
    margin-right: 5px;
`

export function SecaoCompartilhar(props) {	
	return (
		<ShareContainer>
			<p>Aqui fica os icones</p>
			<button onClick={props.aoEnviar}>Enviar</button>
		</ShareContainer>
	)
}
