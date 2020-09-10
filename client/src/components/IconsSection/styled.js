import styled from 'styled-components';
import { rotate, wobble, rubberBand, tada, swing } from './keyframes';

export const Content = styled.div`
  width: 200%;
  height: 300px;
  position: fixed;
  pointer-events: none;
  top: calc(50% - 150px);
  transform: ${({ slide }) => (slide === 'left' ? 'translateX(0)' : 'translateX(-50%)')};
  transition: 2s;
  opacity: ${({ origin }) => (origin ? '0.4' : '1')};
  z-index: 1;
  // border: 5px solid red;
  display: flex;
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
  width: 18vw;
  height: 18vw;
  position: absolute;
  top: 14vh;
  left: 25vw;
  // border: 1px solid red;
  transform: ${({ origin }) => (origin ? 'translate(-20vw, -20vh)' : 'translate(0%, 0%)')};
  transition: 2s;
  @media (max-width: 560px) {
    top: 14vh;
    left: 18vw;
    transform: ${({ origin }) => (origin ? 'translate(-5vw, -20vh)' : 'translate(0%, 0%)')};
  }
`;

export const SecondLeftIconContainer = styled.div`
  width: 18vw;
  height: 18vw;
  position: absolute;
  top: 14vh;
  right: 25vw;
  transform: ${({ origin }) => (origin ? 'translate(18vw, -20vh)' : 'translate(0%, 0%)')};
  transition: 2s;
  @media (max-width: 960px) {
    transform: ${({ origin }) => (origin ? 'translate(13vw, -15vh)' : 'translate(0%, 0%)')};
  }
  @media (max-width: 560px) {
    top: 14vh;
    right: 15vw;
    transform: ${({ origin }) => (origin ? 'translate(-5vw, -18vh)' : 'translate(0%, 0%)')};
  }
`;

export const ThirdLeftIconContainer = styled.div`
  width: 18vw;
  height: 18vw;
  position: absolute;
  top: 50vh;
  left: 32vw;
  // border: 1px solid red;
  transform: ${({ origin }) => (origin ? 'translate(-27vw, 3vh)' : 'translate(0%, 0%)')};
  transition: 2s;
  @media (max-width: 960px) {
    transform: ${({ origin }) => (origin ? 'translate(-22vw, 10vh)' : 'translate(0%, 0%)')};
  }
  @media (max-width: 560px) {
    top: 50vh;
    left: 25vw;
    transform: ${({ origin }) => (origin ? 'translate(-12vw, 10vh)' : 'translate(0%, 0%)')};
  }
`;

export const FourthLeftIconContainer = styled.div`
  width: 18vw;
  height: 18vw;
  position: absolute;
  top: 50vh;
  right: 30vw;
  // border: 1px solid red;
  transform: ${({ origin }) => (origin ? 'translate(23vw, 8vh)' : 'translate(0%, 0%)')};
  transition: 2s;
  @media (max-width: 960px) {
    transform: ${({ origin }) => (origin ? 'translate(20vw, 12vh)' : 'translate(0%, 0%)')};
  }
  @media (max-width: 560px) {
    top: 50vh;
    right: 20vw;
    transform: ${({ origin }) => (origin ? 'translate(5vw, 10vh)' : 'translate(0%, 0%)')};
  }
`;

export const Icon1 = styled.img`
  width: 230px;
  height: 150px;
  position: absolute;
  top: -50px;
  left: -85px;
  animation: ${rubberBand} 2s linear infinite;
  @media (max-width: 750px) {
    width: 170px;
    height: 110px;
  }
`;

export const Icon6 = styled.img`
  width: 140px;
  height: 140px;
  position: absolute;
  top: -50px;
  left: -50px;
  animation: ${wobble} 2s linear infinite;
  @media (max-width: 750px) {
    width: 120px;
    height: 120px;
  }
`;

export const Icon2 = styled.img`
  width: 110px;
  height: 110px;
  position: absolute;
  top: -40px;
  right: -50px;
  animation: ${rotate} 2s linear infinite;
  @media (max-width: 750px) {
    width: 80px;
    height: 80px;
  }
`;

export const Icon8 = styled.img`
  width: 250px;
  height: 150px;
  position: absolute;
  top: -40px;
  left: auto;
  animation: ${rotate} 2s linear infinite;
  @media (max-width: 750px) {
    top: -40px;
    left: -40px;
    width: 220px;
    height: 130px;
  }
`;

export const Icon3 = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -40px;
  left: -50px;
  animation: ${tada} 2s linear infinite;
  @media (max-width: 750px) {
    width: 80px;
    height: 80px;
  }
`;

export const Icon7 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -40px;
  left: -50px;
  animation: ${tada} 2s linear infinite;
  @media (max-width: 750px) {
    width: 130px;
    height: 130px;
  }
`;

export const Icon4 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  top: -40px;
  right: -50px;
  animation: ${tada} 2s linear infinite;
  @media (max-width: 750px) {
    width: 80px;
    height: 80px;
  }
`;

export const Icon9 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -40px;
  right: -50px;
  animation: ${tada} 2s linear infinite;
  @media (max-width: 750px) {
    width: 80px;
    height: 80px;
  }
`;

export const ImgContainer = styled.div`
  width: 300px;
  height: 300px;
  animation: ${swing} 5s linear infinite;
  position: relative;
  @media (max-width: 960px) {
    width: 270px;
    height: 270px;
  }
  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 400px) {
    width: 170px;
    height: 170px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
