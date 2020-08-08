import styled, { keyframes } from 'styled-components';

const hideFrame = keyframes`
  to {
    visibility: hidden;
  }
`;

const moveLeftFrame = keyframes`
0%   {top: 500px; left: -1500px;}
10%   {top: 500px; left: -1500px;}
20%   {top: 500px; left: -1500px;}
50%  {top: -1000px; left: -100px;}
80% {top: 500px; left: -1500px;}
90% {top: 500px; left: -1500px;}
100% {top: 500px; left: -1500px;}
`;

const moveRightFrame = keyframes`
0%   {top: -500px; left: -400px;}
10%   {top: -500px; left: -400px;}
20%   {top: -500px; left: -400px;}
50%  {top: -1000px; left: -2500px;}
80% {top: -500px; left: -400px;}
90% {top: -500px; left: -400px;}
100% {top: -500px; left: -400px;}
`;

export const LeftWave = styled.div`
  position: absolute;
  opacity: 0.4;
  width: 2000px;
  height: 2000px;
  border-radius: 45%;
  background: ${({ color }) => color};
  left: ${({ hoverd }) => (hoverd ? '-1550px' : '-1600px')};
  top: -170px;
  transition: 0.3s;
`;

export const RightWave = styled.div`
  position: absolute;
  opacity: 0.4;
  width: 2000px;
  height: 2000px;
  border-radius: 43%;
  top: -1250px;
  border-radius: 45%;
  background: ${({ color }) => color};
  right: ${({ hoverd }) => (hoverd ? '-1950px' : '-2000px')};
  transition: 0.3s;
`;

export const LeftCircle = styled.div`
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background: ${({ color }) => color};
  position: absolute;
  // top: ${({ clicked }) => (clicked ? '-1000px' : '500px')};
  top: -100%;
  // left: ${({ clicked }) => (clicked ? '-100px' : '-1500px')};
  left: -90%;
  // animation: ${moveLeftFrame} 5s 5s forwards infinite;
  transition: 0.8s;
  z-index: -1;
`;

export const RightCircle = styled.div`
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background: ${({ color }) => color};
  position: absolute;
  // top: ${({ clicked }) => (clicked ? '-500px' : '-1000px')};
  top: -100%;
  // right: ${({ clicked }) => (clicked ? '-400px' : '-2500px')};
  right:-90%;
  // animation: ${moveRightFrame} 5s 5s forwards infinite;

  transition: 0.8s;
  z-index: -2;  
  // animation: ${hideFrame} 0s 2s forwards;
  visibility: visible;
`;

export const LeftContainer = styled.div`
  position: absolute;
  top: 50px;
  transform: rotate(40deg);
  left: 0;
`;

export const RightContainer = styled.div`
  position: absolute;
  top: 0;
  transform: rotate(31deg);
  right: 0;
`;

export const LeftButton = styled.button`
  position: absolute;
  left: 0;
  top: 50px;
  width: 100px;
  height: 500px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 9999;
`;

export const RightButton = styled.button`
  position: absolute;
  right: 0;
  top: 50px;
  width: 100px;
  height: 500px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 9999;
`;
export const Div = styled.div``;
