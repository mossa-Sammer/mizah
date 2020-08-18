import React from 'react';
import Waves from '../Waves';
import { Big, Left } from './styled';

const Slider = ({
  colors,
  leftHover,
  setLeftHover,
  rightHover,
  setRightHover,
  leftClick,
  setLeftClick,
  rightClick,
  setRightClick,
  setColors,
  slide,
  setSlide,
}) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Waves
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
        setSlide={setSlide}
      />
      <Big color={colors.main}>
        <Left color={colors.second} />
      </Big>
    </div>
  );
};

export default Slider;
