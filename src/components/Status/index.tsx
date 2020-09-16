import React from 'react'
import * as S from './styles'

export type StatusProps = {
  value: string
  title: string
  color?: 'white' | 'black'
}

const Status = ({color='white',value,title}:StatusProps) => (
  <S.StatusWrapper>
      <S.StatusValue color={color}>{value}</S.StatusValue>
      <S.StatusName color={color}>{title}</S.StatusName>
  </S.StatusWrapper>
)

export default Status
