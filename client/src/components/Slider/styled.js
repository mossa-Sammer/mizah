import styled from 'styled-components';

export const Content = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: ${({ slide }) => (slide === 'left' ? '1000px' : '-1000px')};
  transition: 2s;
`;
