/* eslint-disable import/no-named-as-default-member */
import styled from '@emotion/styled';
import theme from '../../utils/theme';

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

export const Slide = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  z-index: 5;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : 'row-reverse')};

  ${() => theme.media.mobile} {
    flex-direction: column;
  }

  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-left: 0px;
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
  right: auto;

  ${() => theme.media.mobile} {
    top: 100%;
    right: 10px;
  }

  @media (max-width: 700px) {
    top: 95%;
  }
`;

export const SliderWrapper = styled.div`
  & * {
    outline: none;
  }

  & .slick-initialized {
    display: flex;
  }

  & .slick-dots {
    // position: relative;
    display: flex !important;
    flex-wrap: wrap;
    left: -60%;
    width: 50%;
    bottom: auto;
    max-height: 360px;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width: 970px) {
      left: 0;
      top: -100px;
      width: 100%;
      justify-content: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }

  & .slick-dots li button:before {
    content: '';
  }

  & .slick-dots li {
    width: 7.5rem;
    height: 7.5rem;
    @media (max-width: 540px) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  & .slick-dots li button {
    position: absolute;
    background: ${() => theme.colors.gray7};
    border: 1px solid white;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 540px) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  & .slick-dots li.slick-active button {
    background: ${() => theme.colors.pink};
  }
  @media (max-width: 970px) {
    margin-top: 100px;
  }
`;

export const ImgContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  min-width: 200px;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }

  img {
    margin-bottom: 1rem;
  }
`;

export const TextContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;

  ${() => theme.media.mobile} {
    width: 95%;
  }
`;

export const Body16 = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  ${() => theme.media.tablet} {
    text-align: center;
  }
`;

export const H4 = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  padding: 0;
`;

export const H5Font16 = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.08em;
  color: ${({ color }) => theme.colors[color] || color || theme.colors.black2};
  margin: 0;
  padding: 0;
`;

export const H4Bold = styled.h4`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  padding: 0;
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

export const TitleImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: ${({ lang }) => (lang === 'en' ? '-20px' : 0)};
  margin-left: ${({ lang }) => (lang === 'ar' ? '-20px' : 0)};
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
