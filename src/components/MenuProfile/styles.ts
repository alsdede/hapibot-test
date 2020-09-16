import styled, { css } from 'styled-components';


export const Wrapper = styled.menu`
  display: flex;
  flex: 1;
  position:absolute;
  height: 256px;
  padding: 0 113px;
  max-width:1440px;

  align-items: center;
  bottom:-128px;
  left:0;
  right:0;
  z-index:99;

  @media(max-width: 1280px) {
  padding:0 80px;

  }
`;

export const BorderBottom = styled.div`

`;
export const WrapperUser = styled.div`

`;
export const UserAvatar = styled.img`
  width: 25.6rem;
  height:25.6rem;
  z-index: 99;
  object-fit: cover;
  border-radius: 50%;
  margin-right: ${({theme})=> theme.spacings.medium};
`;
export const Username = styled.span`
  ${({theme})=>css`
  color: ${theme.colors.white};
  font-size:${theme.font.sizes.exlarge};
  font-weight: ${theme.font.bold};
  z-index: 99;
  `}


`;
export const LeftSide = styled.div`
  display: flex;
  align-items:center;
  justify-content:flex-start;
  flex:1;
  height:100%;

`;
export const NavMenu = styled.ul`
  display:flex;
  list-style:none;
  margin-top: 54px;

`;
export const NavItem = styled.li`
  a {
    ${({theme})=>css`
    margin-right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size:${theme.font.sizes.xsmall};
    letter-spacing: 1px;
    text-decoration: none;
  `}
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items:flex-end;
  justify-content:center;
  flex:1;
  height:100%;
  flex-direction:column;
`;

export const OutsideLinks = styled.div`
  display: flex;
  margin-top:48px;
`;

export const OutsideItem = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 8px;
`;

export const Status = styled.div`
  display: flex;

`;
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left:56px;
`;
export const StatusValue = styled.span`
  ${({theme})=>css`
  color: ${theme.colors.white};
  font-size:${theme.font.sizes.xxlarge};
  font-weight: ${theme.font.bold};
  `}
`;

export const StatusName = styled.span`
${({theme})=>css`
  margin-top:7px;
  color: ${theme.colors.white};
  font-size:${theme.font.sizes.xxsmall};
  `}
`;
