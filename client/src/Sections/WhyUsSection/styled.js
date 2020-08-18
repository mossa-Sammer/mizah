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

export const TitleContainer = styled.div`
  width: 70%;
  padding: 0 50px;
  display: flex;
  align-items: ${({ lang }) => (lang === 'en' ? 'flex-start' : 'flex-end')};
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 25px;
  color: #8368af;
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
`;
export const TitleSpan = styled.span`
  width: 250px;
  height: 10px;
  background: #cea380;
  display: block;
  margin: 0;
`;

export const SectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5ebfe;
`;

export const SectionTitleText = styled.h1`
  font-size: 54px;
  color: #52387f;
  margin:0;
  padding 0 10px;
`;

export const SecondSecItem = styled.div`
  background-color: #f5ebfe;
  width: 100%;
  height: 100px;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: 5px 10px 20px -8px #000;
`;

export const SubTitle = styled.h5`
  text-align: ${({ lang }) => (lang === 'en' ? 'left' : 'right')};
  padding: 10px 0;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  color: #8368af;
`;

export const SubTitleSpan = styled.span`
  width: 80px;
  height: 5px;
  background: #cea380;
  display: block;
  margin: 0;
`;

export const SubTitleContainer = styled.div`
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
`;
