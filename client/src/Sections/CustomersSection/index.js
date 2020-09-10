/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import * as S from './styled';
import { Col, Row } from '../../components/Grid';
import LeftArrow from '../../components/SVG/LeftArrow';
import SectionLayout from '../../components/Layout/SectionLayout';

// import Img from '../../assets/ourStory.png';
import TitlePoints from '../../assets/titlePoints.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const dammydata = [
//   {
//     image: Img,
//     name: 'fadi O.',
//     nameAr: 'فادي عمر',
//     textAr: 'هذا النص تجريبي لملئ مكان حتى يتم تعبئته بشكل مناسيب وافضل ',
//     text: 'ass as a as bas m ajbn alh a;jlkahs a;las lahs ajlkh ajkl;h a kajhs ssa',
//   },
//   {
//     image: Img,
//     name: 'fadi O.',
//     nameAr: 'فادي عمر',
//     textAr: 'هذا النص تجريبي لملئ مكان حتى يتم تعبئته بشكل مناسيب وافضل ',
//     text: 'ass as a as bas m ajbn alh a;jlkahs a;las lahs ajlkh ajkl;h a kajhs ssa',
//   },
//   {
//     image: Img,
//     name: 'fadi O.',
//     nameAr: 'فادي عمر',
//     textAr: 'هذا النص تجريبي لملئ مكان حتى يتم تعبئته بشكل مناسيب وافضل ',
//     text: 'ass as a as bas m ajbn alh a;jlkahs a;las lahs ajlkh ajkl;h a kajhs ssa',
//   },
//   {
//     image: Img,
//     name: 'fadi O.',
//     nameAr: 'فادي عمر',
//     textAr: 'هذا النص تجريبي لملئ مكان حتى يتم تعبئته بشكل مناسيب وافضل ',
//     text: 'ass as a as bas m ajbn alh a;jlkahs a;las lahs ajlkh ajkl;h a kajhs ssa',
//   },
// ];

const OurPeapoleSection = ({ lang }) => {
  const [data, setData] = useState(null);
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

  useEffect(() => {
    ( async () => {
      try{
        const result = await axios.get('/api/v1/testimonial');
        setData(result.data)
      }catch(e){
        console.log(e)
      }
    })()
  }, [])

  useEffect(() => {
    const btns = document.querySelectorAll('#slider-wrapper div .slick-dots li button');
    btns.forEach((btn, i) => {
      const img = document.createElement('img');
      img.src = data[i] && data[i].image_url;
      img.style.width = '90%';
      img.style.height = '90%';
      img.style.borderRadius = '50%';

      btn.appendChild(img);
    });
  }, [data]);
  return (
    <>
      <SectionLayout id="our-people" bgcolor="sectionBackground" addPaddingY>
        <Row>
          <Col w={[4, 6, 12]}>
            <S.TitleContainer lang={lang} style={{ position: 'relative', zIndex: 999 }}>
              <S.TitleSubContainer lang={lang}>
                <S.TitleImg src={TitlePoints} lang={lang}/>
                <S.Title>{lang === 'en' ? 'Customer Testimonials' : 'شهادات العملاء'}</S.Title>
              </S.TitleSubContainer>
            </S.TitleContainer>
          </Col>
        </Row>
        {!!data && !!data.length && (
          <Row jcM="flex-end" jc="flex-end">
            <Col w={[4, 6, 8]}>
              <S.SliderWrapper id="slider-wrapper">
                <Slider {...settings} style={{ position: 'relative', zIndex: 999 }}>
                  {data.map(
                    elem =>
                      elem && (
                        <Row jc="center">
                          <Col w={[4, 6, 12]}>
                            <S.Slide lang={lang} style={{ cursor: 'grab' }}>
                              <S.ImgContainer>
                                <img
                                  src={elem.image_url}
                                  style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: '50%',
                                    border: '10px solid #f3c691',
                                  }}
                                  alt="img"
                                />
                                <S.H5Font16 color="midnight">
                                  {lang === 'en' ? elem.name : elem.name_ar}
                                </S.H5Font16>
                              </S.ImgContainer>
                              <S.TextContainer>
                                <S.Body16 color="gray5" lang={lang}>
                                  {lang === 'en' ? elem.said : elem.said_ar}
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
