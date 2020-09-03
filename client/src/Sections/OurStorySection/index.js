/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import TitleIcon from '../../components/SVG/titleIcon';
import Section from '../../components/Layout/Section';
import { Col, Row } from '../../components/Grid';

const content = {
  title: 'OUR STORY',
  titleAr: 'من هي ميزة',
};

const OurStorySection = ({ lang }) => {
  const [aboutUs, setAboutUs] = useState({})
  const _lang = lang || 'en';
  useEffect(() => {
    (async () => {
      const result = await axios.get('/api/v1/aboutus')
      setAboutUs(result.data)
    })()
  },[])
  return (
    <Section bgcolor="#f5ebfe" id="our-story" customBg>
      <Row mrT={6}>
        <Col w={[4, 5, 12]}>
          <S.TitleContainer lang={_lang}>
            <S.TitleSubContainer lang={_lang}>
              <TitleIcon />
              <S.Title>{lang === 'en' ? content.title : content.titleAr}</S.Title>
            </S.TitleSubContainer>
          </S.TitleContainer>
        </Col>
      </Row>
      { aboutUs.description &&     <Row mt={4} mtT={4} mtM={2}>
        <Col w={[4, 5, 12]}>
          <S.Content lang={_lang}>
            {lang === 'en' ? aboutUs.description : aboutUs.description_ar}
          </S.Content>
        </Col>
        <Col w={[4, 6, 12]} style={{ display: 'flex', justifyContent: 'center' }}>
          <S.ImageContainer>
            <img src={aboutUs.image_url} alt="our story" style={{ width: '100%' }} />
          </S.ImageContainer>
        </Col>
      </Row>}
    </Section>
  );
};

export default OurStorySection;
