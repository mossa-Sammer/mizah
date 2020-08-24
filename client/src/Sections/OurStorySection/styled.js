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
  // margin-left: 30px;
  padding-right: 60px;
  width: 100%;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  align-items: center;
`;

export const TitleSubContainer = styled.div`
  display: flex;
  flex-direction: ${({ lang }) => (lang === 'en' ? 'row' : ' row-reverse')};
  align-items: center;
  margin-right: ${({ lang }) => (lang === 'ar' ? 50 : 0)};
  margin-left: ${({ lang }) => (lang === 'en' ? 50 : 0)};
`;

export const Title = styled.h1`
  font-size: 54px;
  color: #52387f;
  margin:0;
  padding 0 10px;
  @media (max-width: 380px) {
    font-size: 38px;
  }
  @media (max-width: 300px) {
    font-size: 28px;
  }
`;

export const Content = styled.div`
  color: #777;
  font-size: 20px;
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  // text-align: right;
  // padding-left: 50px;
  // padding-right: 50px;
  justify-content: center;
  padding: ${({ lang }) => (lang === 'en' ? '0 0 0 50px' : '0 50px 0 0')};
`;
