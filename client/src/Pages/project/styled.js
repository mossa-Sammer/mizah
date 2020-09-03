import styled from '@emotion/styled';
import theme from '../../utils/theme';

export const Div = styled.div``;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  background-size: 100%;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-image: ${({ bg }) => `url(${bg})`};
  &::after {
    background-color: rgba(99, 79, 134, 0.8);
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    // z-index: -1;
    opacity: 0.4;
  }
`;

export const TitleContainer = styled.div`
  min-width: 50%;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const TitleSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  z-index: 999;
`;

export const Title = styled.h1`
line-height: 1;
  font-size: 34px;
  color: #fff;
  margin:0;
  padding 0 10px;
  @media (max-width: 960px) {
    font-size: 28px;
  }
  @media (max-width: 420px) {
    font-size: 22px;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : 'row-reverse')};
`;

export const TextContainer = styled.div`
  width: 100%;
  // padding: 0 50px;
`;

export const Text = styled.p`
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  line-height: 50px;
  text-align: justify;
  font-size: 20px;
  color: #212529;
`;

export const ShowImage = styled.div`
  width: 80%;
  @media (max-width: 925px) {
    width: 100%;
  }
  height: 300px;

  vertical-align: middle;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: ${({ bg }) => `url(${bg})`};
`;

export const ImagesContainer = styled.div`
  width: 80%;
  @media (max-width: 925px) {
    width: 100%;
  }
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const ImageContainer = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;

export const SingleImage = styled.div`
  box-sizing: border-box;
  border: ${({ active }) => (active ? '1px solid blue' : 'none')};
  margin: 5px 10px;
  width: 100px;
  height: 100px;
  vertical-align: middle;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: ${({ bg }) => `url(${bg})`};
`;

export const VideoContainer = styled.div`
  height: 700px;
  width: 640px;
`;