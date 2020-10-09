import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  height: 300px;
  margin: 20px;
  background-image: ${({ bg }) => `url('${bg}')`};
  background-color: black;
  background-size: cover;
  cursor: pointer;
  position: relative;
  z-index: 11;
  -webkit-box-shadow: 0 0 5px #000;
  box-shadow: 0 0 5px #000;
  background-position: 50%;
  &:hover .overlay {
    opacity: 1;
    & .head {
      transform: translateY(0px);
    }

    & hr {
      width: 75px;
      transition-delay: 0.4s;
    }

    & .cart {
      transform: translateY(10px);
      transition-delay: 0.6s;
      opacity: 1;
    }
  }
  @media (max-width: 500px) {
    width: auto;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;

  background: rgba(77, 77, 77, 0.9);
  color: #f3c691;
  opacity: 0;
  transition: all 0.5s;

  font-family: 'Playfair Display', serif;
`;

export const Items = styled.div`
  padding-left: 10px;
  letter-spacing: 3px;
`;

export const ItemsHead = styled.div`
  padding-left: 10px;
  letter-spacing: 3px;
  font-size: 30px;
  line-height: 40px;

  transform: translateY(40px);
  transition: all 0.7s;
  hr {
    display: block;
    width: 0;

    border: none;
    border-bottom: solid 2px $bg;

    position: absolute;
    bottom: 0;
    left: 20px;

    transition: all 0.5s;
  }
`;

export const ItemsCart = styled.div`
  font-size: 12px;
  opacity: 0;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
  transform: translateY(40px);
  transition: all 0.7s;

  span {
    margin-left: 10px;
  }
`;
