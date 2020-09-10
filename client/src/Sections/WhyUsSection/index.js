import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';
import TitlePoints from '../../assets/titlePoints.png';
import Section from '../../components/Layout/Section';
import { Row, Col } from '../../components/Grid';

const WhyUsSection = ({ lang }) => {
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    try {
      (async () => {
        const title = await axios.get('/api/v1/setting');
        const result = await axios.get('/api/v1/feature');
        setTitle(title.data);
        setContent(result.data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Section bgcolor="sectionBackground" id="why-us">
      <Row>
        <Col w={[4, 6, 12]}>
          <S.SectionTitle lang={lang}>
            <S.TitleSubContainer lang={lang}>
              <S.TitleImg src={TitlePoints} lang={lang}/>
              <S.TitleText>{lang === 'en' ? 'Why Mizha ?' : 'لماذا نحن ؟'}</S.TitleText>
            </S.TitleSubContainer>
          </S.SectionTitle>
        </Col>
      </Row>
      <Row mt={3} jc={lang === 'en' ? 'flex-start' : 'flex-end'}>
        <Col w={[4, 6, 12]}>
          <S.MainTitleContainer lang={lang}>
            {title && (
              <S.Title lang={lang}>
                {lang === 'en' ? title.description : title.description_ar}
              </S.Title>
            )}
            <S.TitleSpan style={{ marginTop: 15 }} />
          </S.MainTitleContainer>
        </Col>
      </Row>
      <Row>
        {content &&
          content.map(e => (
            <Col w={[4, 6, 12]}>
              <S.Card>
                <S.ItemTitleContainer lang={lang}>
                  <S.SubTitle lang={lang}>{lang === 'en' ? e.title : e.title_ar}</S.SubTitle>
                  <S.SubTitleSpan />
                </S.ItemTitleContainer>
                <S.TextContent lang={lang}>
                  {lang === 'en' ? e.description : e.description_ar}
                </S.TextContent>
              </S.Card>
            </Col>
          ))}
      </Row>
    </Section>
  );
};

export default WhyUsSection;
