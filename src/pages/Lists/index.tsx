import React from 'react'
import Menu from '../../components/Menu'
import * as S from './styles'

const Lists= () => {
  return (
    <S.Container>
      <S.WrapperContainer>
        <Menu/>
        <S.BackgroundMenu/>
      </S.WrapperContainer>
    </S.Container>
  );
};

export default Lists;
