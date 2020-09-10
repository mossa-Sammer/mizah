import styled from 'styled-components';

export const Big = styled.div`
  width: 100%;
  height: 100vh;
  background: #350f68;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

export const Left = styled.div`
  width: 300%;
  height: 300%;
  background: #f4c179;
  transform: ${({ color }) => (color === '#350f68' ? 'translateX(100%)' : 'translateX(0)')};
  border-radius: 50%;
  position: absolute;
  top: -100%;
  left: -150%;
  z-index: -1;
  transition: 3s;
`;
