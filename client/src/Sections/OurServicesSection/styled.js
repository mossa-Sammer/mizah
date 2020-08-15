import styled from 'styled-components';
import { fadeInLeft, fadeInRight } from './keyframes';

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
  // flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  align-items: center;
  justify-content: center;
  width: 100%;
  // margin-right: ${({ lang }) => (lang === 'ar' ? '50px' : 0)};
  // margin-left: ${({ lang }) => (lang === 'en' ? '50px' : 0)};
  margin-top: 70px;
`;

export const Title = styled.h1`
  font-size: 54px;
  color: #52387f;
  margin:0;
  padding 0 10px;
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
  color: #f3c691;
  margin-bottom: 0;
`;

export const Button = styled.button`
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
