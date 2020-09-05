/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import TitleIcon from '../../components/SVG/titleIcon';
import Carousel from './Carousle';

import Section from '../../components/Layout/Section';
import { Row, Col } from '../../components/Grid';

import S1 from '../../assets/s1.png';

const _content = [
  {
    id: 0,
    title: 'loading..',
    titleAr: 'loading..',
    image_url: S1,
    description: 'loading..',
    description_ar: 'loading..',
  },
  {
    id: 1,
    title: 'loading..',
    titleAr: 'loading..',
    image_url: S1,
    description: 'loading..',
    description_ar: 'loading..',
  },
  {
    id: 2,
    title: 'loading..',
    titleAr: 'loading..',
    image_url: S1,
    description: 'loading..',
    description_ar: 'loading..',
  },
  {
    id: 3,
    title: 'loading..',
    titleAr: 'loading..',
    image_url: S1,
    description: 'loading..',
    description_ar: 'loading..',
  },
];

const OurServicesSection = ({ lang }) => {
  const [content, setContent] = useState(_content);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/v1/service');
      setContent(data);
    })();
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const _lang = lang || 'en';
  return (
    <Section bgcolor="#f5ebfe" id="our-services">
      <Row>
        <Col w={[4, 6, 12]}>
          <S.TitleContainer lang={_lang}>
            <S.TitleSubContainer lang={_lang}>
              <TitleIcon />
              <S.Title>{_lang === 'en' ? 'Our Services' : 'خدماتنا '}</S.Title>
              <TitleIcon />
            </S.TitleSubContainer>
          </S.TitleContainer>
        </Col>
      </Row>
      <Row mt={3} jc={_lang === 'en' ? 'flex-start' : 'flex-end'}>
        {content.length > 0 && (
          <Col w={[4, 5, 10]}>
            <S.ActiveContent key={activeIndex} lang={_lang}>
              <S.ActiveTitle lang={_lang}>
                {_lang === 'en' ? content[activeIndex].title : content[activeIndex].title_ar}
              </S.ActiveTitle>
              <S.Content lang={_lang}>
                {_lang === 'en'
                  ? content[activeIndex].description
                  : content[activeIndex].description_ar}
              </S.Content>
            </S.ActiveContent>
          </Col>
        )}
      </Row>
      <Carousel items={content} setActiveIndex={setActiveIndex} lang={_lang} />
    </Section>
  );
};

export default OurServicesSection;
