import styled from 'styled-components';
import backgroundImg from '../../assets/img/background.jpg'

export const Container = styled.div`
  height: 424px;
  position: relative;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: 0 -290px;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 33, 38, 0.3) 0%, #001113 100%);

`;

export const BackgroundMenu = styled.div`
  bottom:-80px;

  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(23, 53, 57, 0) 0%,
    rgba(23, 53, 57, 0.5) 100%
  );
  height: 72px;
  width: 100%;
  z-index:2;
`;
