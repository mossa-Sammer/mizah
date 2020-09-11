import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import * as S from './styled';
import Logo from '../../assets/logo-white.png';

// icons
// import Icon1 from '../../assets/icon1.png';
import Icon1 from '../../assets/Ehotline3d.png';
// import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';

import Icon6 from '../../assets/icon6.png';
import Icon7 from '../../assets/icon7.png';
import Icon8 from '../../assets/icon8.png';
import Icon9 from '../../assets/icon9.png';
import Icon10 from '../../assets/icon10.png';

const IconsSection = ({ slide }) => {
  const [origin, setOrigin] = useState(false);
  // eslint-disable-next-line no-unused-vars
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -200) {
      if (!origin) setOrigin(true);
    } else if (origin) setOrigin(false);
  });
  let leftOpacity = 1;
  let rightOpacity = 1;
  if (origin) {
    if (slide === 'left') {
      rightOpacity = 0;
      leftOpacity = 1;
    } else {
      rightOpacity = 1;
      leftOpacity = 0;
    }
  }
  return (
    <S.Content slide={slide} origin={origin}>
      <div
        style={{
          width: '50%',
          height: '100%',
          // background: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          opacity: leftOpacity,
        }}
      >
        <S.ImgContainer>
          <S.Img src={Logo} />
        </S.ImgContainer>
        {/* first Icon */}
        <S.FirstLeftIconContainer origin={origin}>
          <S.Icon6 src={Icon6} alt="icon1" />
        </S.FirstLeftIconContainer>
        {/* second Icon */}
        <S.SecondLeftIconContainer origin={origin}>
          <S.Icon8 src={Icon7} alt="icon2" />
        </S.SecondLeftIconContainer>
        {/* third Icon */}
        <S.ThirdLeftIconContainer origin={origin}>
          <S.Icon7 src={Icon8} alt="icon3" />
        </S.ThirdLeftIconContainer>
        {/* fourth Icon */}
        <S.FourthLeftIconContainer origin={origin}>
          <S.Icon9 src={Icon9} alt="icon4" />
        </S.FourthLeftIconContainer>
      </div>
      <div
        style={{
          width: '50%',
          height: '100%',
          // background: 'green',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          opacity: rightOpacity,
        }}
      >
        <S.ImgContainer>
          <S.Img src={Logo} />
        </S.ImgContainer>
        {/* first Icon */}
        <S.FirstLeftIconContainer origin={origin}>
          <S.Icon1 src={Icon1} alt="icon1" />
        </S.FirstLeftIconContainer>
        {/* second Icon */}
        <S.SecondLeftIconContainer origin={origin}>
          <S.Icon2 src={Icon10} alt="icon2" origin={origin} />
        </S.SecondLeftIconContainer>
        {/* third Icon */}
        <S.ThirdLeftIconContainer origin={origin}>
          <S.Icon3 src={Icon3} alt="icon3"/>
        </S.ThirdLeftIconContainer>
        {/* fourth Icon */}
        <S.FourthLeftIconContainer origin={origin}>
          <S.Icon4 src={Icon4} alt="icon4" />
        </S.FourthLeftIconContainer>
      </div>
    </S.Content>
  );
};

export default IconsSection;
