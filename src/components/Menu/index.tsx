import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../context/user';
import * as S from './styles';
import { useSocial } from 'context/social';
import Status from 'components/Status';

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

const Menu = () => {
  const { user } = useUser();
  const { social } = useSocial();
  const StatusItems = [
    {
      "name":'LIKES',
      "value":social.likes/1000 + "k"
    },
    {
      "name":'REVIEWS',
      "value":social.reviews/1000 + "k"
    },
    {
      "name":'LISTS',
      "value":String(social.lists)
    },
    {
      "name":'MEDIA',
      "value":String(social.media)
    },
  ]

  const formatValue = (num:number) => {
    let aux ='';
    if(num >= 1000){
      aux = String(num/1000 )+ "k";
      return aux;
    }
    return num;
  }
  return (
    <S.Wrapper>
      <S.Top>

      <S.LeftSide>
        <S.UserAvatar src={user.avatar} />
        <S.WrapperUser>
          <S.Username>{user.name}</S.Username>
          <S.NavMenu>
            {NavItems.map(item =>(
              <S.NavItem key={item.name}>
                <NavLink  to={item.path} activeClassName="active">{item.name}</NavLink >
              </S.NavItem>
            )
            )}
          </S.NavMenu>
        </S.WrapperUser>
      </S.LeftSide>
      <S.RightSide>
      <S.Status>
         {social && StatusItems.map(item =>(
           <Status  title={item.name} value={item.value} />
         ))}
        </S.Status>
      </S.RightSide>
      <S.BorderBottom/>
            </S.Top>

        <S.Bottom>
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
            </S.Bottom>

    </S.Wrapper>
  );
};

export default Menu;
