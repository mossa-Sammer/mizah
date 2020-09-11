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

export const MainSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${({ lang }) => (lang === 'en' ? 'flex-start' : 'flex-end')};
  flex: 1;
  height: 95%;
`;

export const SecSection = styled.div`
  width: 50%;
  flex: 1;
  height: 95%;
  padding: 30px;
  margin-top: 30px;
`;

export const MainTitleContainer = styled.div`
  display: flex;
  align-items: ${({ lang }) => (lang === 'en' ? 'flex-start' : 'flex-end')};
  flex-direction: column;
  @media(max-width: 500px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #8368af;
  padding: 0;
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  @media (max-width: 500px) {
    text-align: center;
    font-size: 24px;
    padding: 0 10px;
  } 
`;
export const TitleSpan = styled.span`
  width: 250px;
  height: 10px;
  background: #cea380;
  display: block;
  margin: 0;
`;

export const SectionTitle = styled.div`
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
  flex-direction: ${({lang}) => lang === 'en' ? 'row' : 'row-reverse'};
  width: 100%;
  margin-top: 60px;
`;

export const TitleText = styled.h1`
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

export const Card = styled.div`
  background-color: #f5ebfe;
  width: 100%;
  padding: 20px 10px;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: 5px 10px 20px -8px #000;
  &:hover {
    transform: translateY(-5px);
  }
  @media(max-width: 500px){
    width: 90%;
  }
  transition: 0.3s;
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

export const ItemTitleContainer = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: ${({ lang }) => (lang === 'en' ? 'flex-start' : 'flex-end')};
  flex-direction: column;
`;

export const TextContent = styled.p`
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  padding: 10px 20px;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  color: gray;
  font-size: 18px;
`;

export const TitleImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: ${({lang}) => lang === 'en' ? '-20px' : 0};
  margin-left: ${({lang}) => lang === 'ar' ? '-20px' : 0};
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
