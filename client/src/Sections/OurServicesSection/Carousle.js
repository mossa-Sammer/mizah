/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Slider from 'react-slick';
import Card from '../../components/Card';
import { Button } from './styled';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items, setActiveIndex, lang }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div style={{ width: '80%', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
    </>
  );
};

export default Carousel;
