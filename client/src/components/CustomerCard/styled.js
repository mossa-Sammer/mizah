import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
  border: 1px solid #f3c691;
  border-radius: 10px;
  margin: 0 10px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: #d9d5d4;
    & div {
      transform: scale(1.05);
    }
  }
`;

export const Container = styled.div`
transition: 0.3s;
  width: 220px;
  height: 270px;
  background-image: ${({ bg }) => `url('${bg}')`};
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  z-index: 11;

  background-position: 50%;
`;

export const Name = styled.p`
font-size: 22px;
font-weight: bold;
text-decoration: underline;
color: #901fc0;
text-transform: capitalize;
`;