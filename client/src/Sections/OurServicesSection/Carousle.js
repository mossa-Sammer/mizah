/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Slider from 'react-slick';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Card from '../../components/Card';
import { Button } from './styled';
import { Row, Col } from '../../components/Grid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items, setActiveIndex, lang }) => {
  let slidItem = 3;
  const tablet = useMediaQuery('(max-width:1150px)');
  const mobile = useMediaQuery('(max-width:570px)');

  if (tablet) {
    slidItem = 2;
  }
  if (mobile) {
    slidItem = 1;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidItem,
    slidesToScroll: 1,
  };

  return (
    <Row>
      <Col w={[4, 6, 12]}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Slider {...settings}>
            {items &&
              items.map(e => (
                <Button
                  onClick={() => {
                    setActiveIndex(e.id);
                  }}
                >
                  <Card item={e} lang={lang} />
                </Button>
              ))}
          </Slider>
        </div>
      </Col>
    </Row>
  );
};

export default Carousel;
