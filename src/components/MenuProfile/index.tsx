import React from 'react';
import { useSocial } from 'context/social';
import { useUser } from 'context/user';
import { NavLink } from 'react-router-dom';
import Status from '../Status';
import * as S from './styles';


const NavItems = [
  {
    "name":'ACTIVITY',
    "path":'activity',
    "isActive":true
  },
  {
    "name":"LISTS",
    "path":'lists',
    "isActive":true
  },
  {
    "name":'REVIEWS',
    "path":'reviews',
    "isActive":true
  },
  {
    "name":'MEDIA',
    "path":'media',
    "isActive":true
  },
  {
    "name":'CONNECTIONS',
    "path":'connections',
    "isActive":true
  },
]



const MenuProfile = () => {
  const { user } = useUser();
  const { social } = useSocial();
  const StatusItems = [
    {
      "name":'LIKES',
      "value":social.likes
    },
    {
      "name":'REVIEWS',
      "value":social.reviews
    },
    {
      "name":'LISTS',
      "value":social.lists
    },
    {
      "name":'MEDIA',
      "value":social.media
    },
  ]
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.UserAvatar src={user.avatar} />
        <S.WrapperUser>
        <S.Username>{user.name}</S.Username>
          <S.NavMenu>
            {NavItems.map(item =>(
              <S.NavItem key={item.name}>
                <NavLink  to={item.path}>{item.name}</NavLink >
              </S.NavItem>
            )
            )}
          </S.NavMenu>
        </S.WrapperUser>
      </S.LeftSide>
      <S.RightSide>
        <S.Status>
         {StatusItems.map(item =>(
           <Status  title={item.name} value={item.value} />
         ))}
        </S.Status>

        <S.OutsideLinks>
          <S.OutsideItem
            href="#"
            style={{ backgroundColor: 'rgba(255,0,0,0.5)' }}
          ></S.OutsideItem>
          <S.OutsideItem
            href="#"
            style={{ backgroundColor: 'rgba(60,255,0,0.5)' }}
          ></S.OutsideItem>
          <S.OutsideItem
            href="#"
            style={{ backgroundColor: 'rgba(0,19,255,0.5)' }}
          ></S.OutsideItem>
          <S.OutsideItem
            href="#"
            style={{ backgroundColor: 'rgba(255,219,0,0.5)' }}
          ></S.OutsideItem>
        </S.OutsideLinks>
      </S.RightSide>
    </S.Wrapper>
  );
};

export default MenuProfile;
