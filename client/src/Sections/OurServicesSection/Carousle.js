/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Slider from 'react-slick';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Card from '../../components/Card';
import * as S from './styled';
import { Row, Col } from '../../components/Grid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../components/SVG/LeftArrow';

const Carousel = ({ items, setActiveIndex, lang }) => {
  let slidItem = items.length > 3 ? 3 : items.length;
  const tablet = useMediaQuery('(max-width:1150px)');
  const mobile = useMediaQuery('(max-width:570px)');

  if (tablet) {
    slidItem = items.length > 2 ? 2 : items.length;
  }
  if (mobile) {
    slidItem = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidItem,
    slidesToScroll: 1,
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
  };

  return (
    <Row>
      <Col w={[4, 6, 12]}>
        <div>
          <Slider {...settings}>
            {items &&
              items.map((e, index) => (
                <S.ButtonContainer
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  <Card item={e} lang={lang} />
                </S.ButtonContainer>
              ))}
          </Slider>
        </div>
      </Col>
    </Row>
  );
};

export default Carousel;
