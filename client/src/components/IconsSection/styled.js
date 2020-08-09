import styled from 'styled-components';
import { rotate, wobble, rubberBand, tada, swing } from './keyframes';

export const Content = styled.div`
  width: 200%;
  height: 300px;
  position: fixed;
  top: 50%;
  left: ${({ slide }) => (slide === 'left' ? '1650px' : '-280px')};
  transform: translate(-50%, -50%);
  transition: 2s;
  opacity: 1;
`;

export const LeftElement = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  left: 250px;
  top: 0;
`;

export const RightElement = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  right: 250px;
  top: 0;
`;

export const FirstLeftIconContainer = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  // top: 0;
  // left: -100px;
  left: ${({ y }) => (y <= -220 ? (y >= -580 ? `${y + 100}px` : '-500px') : '-100px')};
  top: ${({ y }) => (y <= -220 ? (y >= -290 ? `${y + 190}px` : '-90px') : '-30px')};
`;

export const SecondLeftIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ y }) =>
    y <= -220
      ? y >= -280
        ? `translate(${y * -1 - 150}px, ${y + 190}px)`
        : `translate(${y > -700 ? -1 * y - 150 : 700}px, -100px)`
      : null};
  // transition: 0.5s;
`;

export const ThirdLeftIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const FourthLeftIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Icon1 = styled.img`
  width: 100px;
  height: 130px;
  position: absolute;
  top: -50px;
  left: -50px;
  animation: ${wobble} 2s linear infinite;
`;

export const Icon2 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -40px;
  left: -50px;
  animation: ${rotate} 2s linear infinite;
`;

export const Icon3 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -40px;
  left: -50px;
  animation: ${tada} 2s linear infinite;
`;

export const ImgContainer = styled.div`
  width: 320px;
  height: 320px;
  position: absolute;
  left: -80px;
  animation: ${swing} 5s linear infinite;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
