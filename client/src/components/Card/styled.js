import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: ltr;
  // border: 3px solid #b68cff;
  // border-radius: 25px;
  // -webkit-border-radius: 25px;
  box-shadow: 0px 5px 35px -16px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  flex-direction: column;
  margin: 15px;
  outline: none;
  cursor: pointer;
  background-color: #f2e3ff;
  &:hover {
    transform: scale(1.1);
  }
  transition: 0.3s;
`;

export const ImageContainer = styled.div`
  width: 90px;
  height: 90px;
  // border: 2px solid #b68cff;
  // border-radius: 50%;
  // -webkit-border-radius: 50%;
  // -moz-border-radius: 50%;
  // -ms-border-radius: 50%;
  // -o-border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;

export const Body = styled.div`
  padding: 5%;
  flex: 1 1 auto;
`;

export const Title = styled.h5`
  text-transform: capitalize;
  color: #52387f;
  font-size: 20px;
  text-align: center;
  font-weight: 900;
  margin: 0;
  padding: 0;
`;
