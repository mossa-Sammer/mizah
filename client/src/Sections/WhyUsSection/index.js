import React from 'react';
import * as S from './styled';
import TitleIcon from '../../components/SVG/titleIcon';
import items, { title } from './dummyData';

import Section from '../../components/Layout/Section';
import { Row, Col } from '../../components/Grid';

const WhyUsSection = ({ lang }) => {
  return (
    <Section id="why-us">
      <Row>
        <Col w={[4, 6, 12]}>
          <S.SectionTitle lang={lang}>
            <S.TitleSubContainer lang={lang}>
              <TitleIcon />
              <S.TitleText>{lang === 'en' ? 'WHY US ?' : 'لماذا نحن ؟'}</S.TitleText>
              <TitleIcon />
            </S.TitleSubContainer>
          </S.SectionTitle>
        </Col>
      </Row>
      <Row mt={3} jc={lang === 'en' ? 'flex-start' : 'flex-end'}>
        <Col w={[4, 6, 12]}>
          <S.MainTitleContainer lang={lang}>
            <S.Title lang={lang}>{lang === 'en' ? title.en : title.ar}</S.Title>
            <S.TitleSpan style={{ marginTop: 15 }} />
          </S.MainTitleContainer>
        </Col>
      </Row>
      <Row>
        {items.map(e => (
          <Col w={[4, 6, 12]}>
            <S.Card>
              <S.ItemTitleContainer lang={lang}>
                <S.SubTitle lang={lang}>{lang === 'en' ? e.title : e.titleAr}</S.SubTitle>
                <S.SubTitleSpan />
              </S.ItemTitleContainer>
              <S.TextContent lang={lang}>{lang === 'en' ? e.content : e.contentAr}</S.TextContent>
            </S.Card>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default WhyUsSection;
