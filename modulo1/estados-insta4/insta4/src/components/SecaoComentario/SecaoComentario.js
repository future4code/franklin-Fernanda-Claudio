import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario(props) {
	const [inputComentario, setInputComentario] = useState ('')
	
	const handleInputComentario = (event) => {
		setInputComentario(event.target.value)
		console.log(inputComentario)
	}

	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={inputComentario}
				onChange={handleInputComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}

