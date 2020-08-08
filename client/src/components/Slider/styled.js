import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: ${({ slide }) => (slide === 'left' ? '1000px' : '-1000px')};
  transition: 2s;
`;
