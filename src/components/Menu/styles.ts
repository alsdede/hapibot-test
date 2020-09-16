import styled, { css,keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 1;
    top:400px;
  }
  to {
    opacity: 1;
    top:168px;
  }
  `
export const Wrapper = styled.menu`
  display: flex;
  flex-direction:column;

  flex: 1;
  height:100%;
  padding: 0px 113px;
  align-items: center;
  position: relative;
  top:168px;
  left:0;
  animation: ${appearFromBottom} 0.4s ease-in-out;

`;

export const Top = styled.div`
display:flex;
height:64px;
width:100%;
position:relative;

z-index:88;
`;
export const Bottom = styled.div`
display:flex;
width:100%;
justify-content:flex-end;
align-items:center;

`;
export const BorderBottom = styled.div`
  position:absolute;
  bottom:0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(191, 236, 242, 0) 0%,
    rgba(191, 236, 242, 0.2) 100%
  );
`;
export const WrapperUser = styled.div`
  display: flex;

  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;

`;
export const UserAvatar = styled.img`
  z-index: 99;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 24px;
  width: 64px;
  height: 64px;
  animation: hoverAnimation 0.4s ease-in-out;
  @keyframes hoverAnimation {
        from {
          width: 256px;
          height:256px;
        }
        to {
          width: 64px;
          height: 64px;
        }
      }
`;
export const Username = styled.span`
  color: white;

  font-weight: bold;
  font-size:18px;
  z-index: 99;
  animation: animateName 0.4s ease-in-out;

  @keyframes animateName {
        from {
          font-size: 36px;
        }
        to {
          font-size: 18px;

        }
      }
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;

`;
export const NavMenu = styled.ul`
display:flex;

flex:1;
height:100%;
list-style:none;
margin-top:10px;


  @keyframes animateNav {
        from {
          margin-top: 50px;
        }
        to {
          margin-top: 0px;
        }
      }
`;
export const NavItem = styled.li`
display:flex;
margin-right:32px;
position:relative;
  a {
    position:relative;
    text-decoration: none;
    color: white;
    font-size: 12px;
    letter-spacing: 1px;

  }
  .active {
  ::before {
    content:'';
    position:absolute;
    height:1px;
    width:100%;
    background:#00B4CC;
    height:2px;
    border-radius:1px;
    margin-top:20px;

  }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content:center;

`;

export const OutsideLinks = styled.div`
  display: flex;
  justify-content: flex-end;

`;

export const OutsideItem = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 8px;
  margin-top: 16px;
  transition: all 0.4s ease-in-out;
  animation: outisideAnimate 0.4s ease-in-out;
  @keyframes outsideAnimate {
        from {
          margin-top: 50px;
        }
        to {
          margin-top: 16px;
        }
      }
`;

export const Status = styled.div`
  display: flex;
  justify-content: flex-end;

`;
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 56px;

`;
export const StatusValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
  transition: all 0.4s ease-in-out;
`;

export const StatusName = styled.span`
  font-size: 10px;
  color: white;


`;
