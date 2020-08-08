import React, { useState, useEffect } from 'react';
import { Container } from './styled';

import Logo from '../../assets/logo.png';
import Slider from '../Slider';

const SliderContainer = () => {
  const [slide, setSlide] = useState('left');
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
      <img src={Logo} alt="logo" />
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
        // autoSlid={autoSlid}
      />
    </Container>
  );
};

export default SliderContainer;
