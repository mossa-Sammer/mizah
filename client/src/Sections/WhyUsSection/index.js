import React from 'react';
import * as S from './styled';
import TitleIcon from '../../components/SVG/titleIcon';

const WhyUsSection = ({ lang }) => {
  return (
    <>
      <S.SectionTitle>
        <TitleIcon />
        <S.SectionTitleText>{lang === 'en' ? 'WHY US ?' : 'لماذا نحن ؟'}</S.SectionTitleText>
        <TitleIcon />
      </S.SectionTitle>
      <S.Section lang={lang}>
        <S.MainSection lang={lang}>
          <S.TitleContainer lang={lang}>
            <S.Title lang={lang}>
              {' '}
              In Mizah, we understand what you want and guarantee you an electronic presence that
              will achieve your high profits
            </S.Title>
            <S.TitleSpan />
          </S.TitleContainer>
        </S.MainSection>
        <S.SecSection />
      </S.Section>
    </>
  );
};

export default WhyUsSection;
