import React, {useState} from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import save from '../../img/save.svg'
import share_black_24dp from '../../img/share_black_24dp.svg'
import done from '../../img/done.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props){
  const [state, setState] = useState({
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  })

  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [salvo, setSalvo] = useState (false)
  const [share, setShare] = useState (false)

  const onClickCurtida = () => {
    if (curtido === true) {
      setCurtido(false)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(true)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  }

  const onClickSalvo = () => {
    if (salvo === true) {
      setSalvo(false)
    } else {
      setSalvo(true)
    }
  }

  let iconeSalvo

    if(salvo) {
      iconeSalvo = done
    } else {
      iconeSalvo = save
    }

    const onClickShare = () => {
      setShare(!share)
      if(share) {
        componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
      }
      console.log(comentando)
    }
    
  
    let iconeShare
  
      if(share) {
        iconeShare = share_black_24dp
      } else {
        iconeShare = share_black_24dp
      }

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

    

  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
        <IconeSemContador
          icone={iconeSalvo}
          onClickIcone={onClickSalvo}
        />
        <IconeSemContador
          icone={iconeShare}
          onClickIcone={onClickShare}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post