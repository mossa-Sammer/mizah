import React from 'react';
import { LeftButton, RightButton } from './styled';
import LeftWaves from './LeftWaves';
import RightWaves from './RightWaves';

import './style.css';

const Waves = ({
  colors,
  leftHover,
  setLeftHover,
  rightHover,
  setRightHover,
  leftClick,
  setLeftClick,
  rightClick,
  setRightClick,
  setSlide,
}) => {
  return (
    <>
      <LeftButton
        type="button"
        onMouseEnter={() => setLeftHover(true)}
        onMouseLeave={() => setLeftHover(false)}
        onClick={() => {
          setLeftClick(true);
          setSlide('left');
          setTimeout(() => {
            setLeftClick(false);
          }, 1000);
        }}
      />
      <RightButton
        type="button"
        onMouseEnter={() => setRightHover(true)}
        onMouseLeave={() => setRightHover(false)}
        onClick={() => {
          setRightClick(true);
          setSlide('right');
          setTimeout(() => {
            setRightClick(false);
          }, 1000);
        }}
      />
      <LeftWaves clicked={leftClick} hoverd={leftHover} colors={colors} />
      <RightWaves clicked={rightClick} hoverd={rightHover} colors={colors} />
    </>
  );
};

export default Waves;
