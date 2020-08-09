import React, { useState, useEffect } from 'react';
import { Container } from './styled';

import Slider from '../Slider';

const SliderContainer = ({ slide, setSlide }) => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const [leftClick, setLeftClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const [colors, setColors] = useState({ main: '#483569', second: '#daaf82' });
  let autoSlid;
  useEffect(() => {
    return () => {
      clearInterval(autoSlid);
    };
  }, [leftClick, rightClick]);

  useEffect(() => {
    setColors(old => ({ main: old.second, second: old.main }));
  }, [slide]);

  useEffect(() => {
    autoSlid = setInterval(() => {
      setSlide(old => {
        if (old === 'left') return 'right';
        return 'left';
      });
    }, 5000);
  }, []);

  return (
    <Container>
      <Slider
        colors={colors}
        leftHover={leftHover}
        setLeftHover={setLeftHover}
        rightHover={rightHover}
        setRightHover={setRightHover}
        leftClick={leftClick}
        setLeftClick={setLeftClick}
        rightClick={rightClick}
        setRightClick={setRightClick}
        setColors={setColors}
        slide={slide}
        setSlide={setSlide}
      />
    </Container>
  );
};

export default SliderContainer;
