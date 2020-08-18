import React from 'react';
import Slider from 'react-slick';
import * as S from './styled';
import { Col, Row } from '../../components/Grid';
import LeftArrow from '../../components/SVG/LeftArrow';
import SectionLayout from '../../components/Layout/SectionLayout';

import HeadlineTitle from '../../components/Title';

import Img from '../../assets/ourStory.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    image: Img,
    name: 'fadi O.',
    nameAr: 'فادي عمر',
    textAr: 'هذا النص تجريبي لملئ مكان حتى يتم تعبئته بشكل مناسيب وافضل ',
    text: 'ass as a as bas m ajbn alh a;jlkahs a;las lahs ajlkh ajkl;h a kajhs ssa',
  },
  {
    image: Img,
    name: 'fadi O.',
    nameAr: 'فادي عمر',
    textAr: 'هذا النص تجريبي لملئ مكان حتى يتم تعبئته بشكل مناسيب وافضل ',
    text: 'ass as a as bas m ajbn alh a;jlkahs a;las lahs ajlkh ajkl;h a kajhs ssa',
  },
];

const OurPeapoleSection = ({ lang }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <S.Button type="button" className="button button--text button--icon" aria-label="prev">
        <S.PrevArrow>
          <LeftArrow width="22px" height="22px" to="prev" color="#7e57b1" />
        </S.PrevArrow>
      </S.Button>
    ),
    nextArrow: (
      <S.Button type="button" className="button button--text button--icon" aria-label="next">
        <S.NextArrow>
          <LeftArrow width="22px" height="22px" to="next" color="#7e57b1" />
        </S.NextArrow>
      </S.Button>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <SectionLayout id="our-people" bgcolor="sectionBackground" addPaddingY>
        <Row>
          <Col w={[4, 6, 12]}>
            <HeadlineTitle lang={lang}>
              {lang === 'en' ? 'CUSTOMER TESTIMONIALS' : 'شهادات العملاء'}
            </HeadlineTitle>
          </Col>
        </Row>
        {!!data.length && (
          <Row jc="center" jcM="flex-end">
            <Col w={[4, 6, 11.5]}>
              <S.SliderWrapper>
                <Slider {...settings}>
                  {data.map(
                    elem =>
                      elem && (
                        <Row jc="center">
                          <Col w={[4, 6, 12]}>
                            <S.Slide lang={lang} style={{ cursor: 'grab' }}>
                              <S.ImgContainer>
                                <img
                                  src={elem.image}
                                  style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: '50%',
                                    border: '10px solid #f3c691',
                                  }}
                                  alt="img"
                                />
                                <S.H5Font16 color="midnight">
                                  {lang === 'en' ? elem.name : elem.nameAr}
                                </S.H5Font16>
                              </S.ImgContainer>
                              <S.TextContainer>
                                <S.Body16 color="gray5" lang={lang}>
                                  {lang === 'en' ? elem.text : elem.textAr}
                                </S.Body16>
                              </S.TextContainer>
                            </S.Slide>
                          </Col>
                        </Row>
                      )
                  )}
                </Slider>
              </S.SliderWrapper>
            </Col>
          </Row>
        )}
      </SectionLayout>
    </>
  );
};

export default OurPeapoleSection;