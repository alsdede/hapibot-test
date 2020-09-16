import React from 'react'
import MenuProfile from '../../components/MenuProfile'
import * as S from './styles'

type UserProps ={
  id: string;
  name:string;
  background:string;
  avatar:string;
}

const Profile = () => {
  return <S.Container>
    <S.WrapperContainer>
      <MenuProfile/>
      <S.BackgroundMenu/>
    </S.WrapperContainer>
  </S.Container>
}

export default Profile;
