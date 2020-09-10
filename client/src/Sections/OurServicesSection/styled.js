import styled from 'styled-components';
import { fadeInLeft, fadeInRight } from './keyframes';
import theme from '../../utils/theme';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5ebfe;
  min-height: 550px;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding-right: 60px;
  width: 100%;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  align-items: center;
`;

export const TitleSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  width: 100%;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-size: 54px;
  color: #52387f;
  margin:0;
  padding 0 10px;
  @media (max-width: 960px) {
    font-size: 38px;
  }
  @media (max-width: 420px) {
    font-size: 26px;
  }
`;

export const Content = styled.div`
  color: #777;
  font-size: 20px;
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  // text-align: right;
  // padding-left: 50px;
  // padding-right: 50px;
  margin-right: 50px;

  padding: ${({ lang }) => (lang === 'en' ? '0 0 0 50px' : '0 50px 0 0')};
`;

export const ActiveTitle = styled.h3`
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  padding: ${({ lang }) => (lang === 'en' ? '0 0 0 50px' : '0 50px 0 0')};
  margin-right: 50px;
  font-weight: 900;
  // color: #f3c691;
  color: rgba(223, 157, 77, 1);
  margin-bottom: 16px;
  font-size: 28px;
`;

export const ButtonContainer = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-shadow: none;
`;

export const ActiveContent = styled.div`
  width: 100%;
  animation: ${({ lang }) => (lang === 'en' ? fadeInLeft : fadeInRight)} 0.5s linear;
`;

export const Button = styled.button`
  height: auto;
  z-index: 5;
  ${() => theme.media.mobile} {
    height: 100%;
  }

  &::before {
    display: none;
    content: '';
  }
`;
export const PrevArrow = styled.div`
  border: 1px solid #dbdbdb;
  box-shadow: ${() => theme.shadows.db1};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -200%;
  left: auto;
  margin-left: 0;

  ${() => theme.media.mobile} {
    top: 100%;
    left: 10px;
    margin-left: 0 !important;
  }
  ${() => theme.media.tablet} {
    margin-left: -30px;
  }

  background: ${() => theme.colors.white};
  transform: rotate(180deg);

  @media (max-width: 700px) {
    top: 95%;
  }
`;
export const NextArrow = styled.div`
  border: 1px solid #dbdbdb;
  box-shadow: ${() => theme.shadows.db1};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: ${() => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  position: absolute;
  top: -200%;
  right: 35px;

  ${() => theme.media.mobile} {
    top: 100%;
  }

  @media (max-width: 700px) {
    top: 95%;
  }
`;


export const TitleImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: ${({lang}) => lang === 'en' ? '-20px' : 0};
  margin-left: ${({lang}) => lang === 'ar' ? '-20px' : 0};
`;
