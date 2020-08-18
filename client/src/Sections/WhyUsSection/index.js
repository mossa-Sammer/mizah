import React from 'react';
import * as S from './styled';
import TitleIcon from '../../components/SVG/titleIcon';
import items, { title } from './dummyData';

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
            <S.Title lang={lang}>{lang === 'en' ? title.en : title.ar}</S.Title>
            <S.TitleSpan />
          </S.TitleContainer>
        </S.MainSection>
        <S.SecSection>
          {items.map(e => (
            <S.SecondSecItem>
              <S.SubTitleContainer lang={lang}>
                <S.SubTitle lang={lang}>{lang === 'en' ? e.title : e.titleAr}</S.SubTitle>
                <S.SubTitleSpan />
              </S.SubTitleContainer>
              <S.TextContent lang={lang}>{lang === 'en' ? e.content : e.contentAr}</S.TextContent>
            </S.SecondSecItem>
          ))}
        </S.SecSection>
      </S.Section>
    </>
  );
};

export default WhyUsSection;
