import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'Hapibot Challenge',
  description = 'Hapibot Challenge Typescript animate'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

  </S.Wrapper>
)

export default Main
