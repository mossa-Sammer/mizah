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
  background: green;
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
