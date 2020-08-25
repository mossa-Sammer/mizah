/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import TitleIcon from '../../components/SVG/titleIcon';
import Carousel from './Carousle';

import Section from '../../components/Layout/Section';
import { Row, Col } from '../../components/Grid';

// const imgsrc = 'http://oldmizah.geeksteams.com/public/image/Services/1591344978.png';
import S1 from '../../assets/s1.png';
import S2 from '../../assets/s2.png';
import S3 from '../../assets/s3.png';
import S4 from '../../assets/s4.png';
const _content = [
  {
    id: 0,
    title: 'first',
    titleAr: 'شسيي',
    image_url: S1,
    description: 'asdas asdas asdas asd asd asdasdasd asdas asdasdasdas  asdas',
    descriptionAr:
      'شسيشس شسيشيمكةلقثصلصنكةت  كشمنبلقصكمل ضيبمكضصن ض ضصكمن ضصي ضكمصينلثصكمنل ب كمضني ',
  },
  {
    id: 1,
    title: 'second',
    titleAr: 'سثصؤخىي',
    image_url: S2,
    description: 'affffsdas asdas asdas asd asd asdasdasd asdas asdasdasdas  asdas',
    descriptionAr:
      'شسيشس شسيشيمكةلقثصلصنكةت  كشمنبلقصكمل ضيبمكضصن ض ضصكمن ضصي ضكمصينلثصكمنل ب كمضني ',
  },
  {
    id: 2,
    title: 'third',
    titleAr: 'فاهقي',
    image_url: S3,
    description: 'qqqffsdas asdas asdas asd asd asdasdasd asdas asdasdasdas  asdas',
    descriptionAr:
      'شسيشس شسيشيمكةلقثصلصنكةت  كشمنبلقصكمل ضيبمكضصن ض ضصكمن ضصي ضكمصينلثصكمنل ب كمضني ',
  },
  {
    id: 3,
    title: 'fourth',
    titleAr: 'بخعقفغا',
    image_url: S4,
    description: 'qq4sadqffsdas asdas asdas asd asd asdasdasd asdas asdasdasdas  asdas',
    descriptionAr:
      'شسيشس شسيشيمكةلقثصلصنكةت  كشمنبلقصكمل ضيبمكضصن ض ضصكمن ضصي ضكمصينلثصكمنل ب كمضني ',
  },
];

const OurServicesSection = ({ lang }) => {
  const [content, setContent] = useState(_content);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/api/v1/service');
  //     setContent(data);
  //   })();
  // }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const _lang = lang || 'en';
  return (
    <Section id="our-services">
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
                {_lang === 'en' ? content[activeIndex].title : content[activeIndex].titleAr}
              </S.ActiveTitle>
              <S.Content lang={_lang}>
                {_lang === 'en'
                  ? content[activeIndex].description
                  : content[activeIndex].descriptionAr}
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
