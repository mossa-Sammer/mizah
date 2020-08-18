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
  position: relative;
  z-index: 2;
  & * {
    outline: none;
  }
  & .slick-dots li button:before {
    content: '';
  }

  & .slick-dots li button {
    position: absolute;
    background: ${() => theme.colors.gray7};
    border: 1px solid white;
    width: 0.5rem;
    border-radius: 50%;
    height: 0.5rem;
  }

  & .slick-dots li.slick-active button {
    background: ${() => theme.colors.pink};
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
