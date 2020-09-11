import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  background-color: #f5ebfe;
  height: 550px;
`;

export const ImageContainer = styled.div`
  width: 90%;
  flex: 1;
  height: 95%;
  max-width: 500px;
  max-height: 500px;
  margin-top: 30px;
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 95%;
  flex: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding-right: 60px;
  width: 100%;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  align-items: center;
  justify-content: center;
`;

export const TitleSubContainer = styled.div`
  display: flex;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 54px;
  color: #52387f;
  margin:0;
  padding 0 10px;
  @media (max-width: 500px) {
    font-size: 26px;
  }
`;

export const Content = styled.div`
  color: #333;
  font-size: 20px;
  direction: ${({ lang }) => (lang === 'en' ? 'ltr' : 'rtl')};
  text-align: justify;
  word-spacing: -2px;
  justify-content: center;
  padding: ${({ lang }) => (lang === 'en' ? '32px 0 0 64px' : '32px 64px 0 0')};
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const TextContainer = styled.div`
  width: 95%;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  width: '100%';
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h5`
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  padding: 10px 0;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  color: #8368af;
  font-size: 20px;
`;
export const SubTitleSpan = styled.span`
  width: 80px;
  height: 5px;
  background: #cea380;
  display: block;
  margin: 0;
`;

export const TextContent = styled.p`
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  padding: 10px 48px;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  color: gray;
  font-size: 18px;
  @media (max-width: 500px) {
    text-align: center;
    padding: 10px 20px;
  }
`;

export const TitleImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: ${({lang}) => lang === 'en' ? '-20px' : 0};
  margin-left: ${({lang}) => lang === 'ar' ? '-20px' : 0};
`;
