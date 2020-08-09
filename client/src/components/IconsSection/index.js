import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import * as S from './styled';
import Logo from '../../assets/logo-white.png';

// icons
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';

const IconsSection = ({ slide }) => {
  const [y, setY] = useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -200 && currPos.y > -700) {
      setY(() => currPos.y);
    }
  });
  return (
    <S.Content slide={slide}>
      <S.LeftElement>
        <S.ImgContainer>
          <S.Img src={Logo} />
        </S.ImgContainer>
        <S.FirstLeftIconContainer y={y}>
          <S.Icon1 src={Icon1} alt="icon1" />
        </S.FirstLeftIconContainer>
        <S.SecondLeftIconContainer y={y}>
          <S.Icon2 src={Icon2} alt="icon2" />
        </S.SecondLeftIconContainer>
        <S.ThirdLeftIconContainer>
          <S.Icon3 src={Icon3} alt="icon3" />
        </S.ThirdLeftIconContainer>
        <S.FourthLeftIconContainer>
          <S.Icon3 src={Icon4} alt="icon4" />
        </S.FourthLeftIconContainer>
      </S.LeftElement>

      <S.RightElement>
        <S.ImgContainer>
          <S.Img src={Logo} />
        </S.ImgContainer>

        <S.FirstLeftIconContainer>
          <S.Icon1 src={Icon1} alt="icon1" />
        </S.FirstLeftIconContainer>
        <S.SecondLeftIconContainer>
          <S.Icon2 src={Icon2} alt="icon2" />
        </S.SecondLeftIconContainer>
        <S.ThirdLeftIconContainer>
          <S.Icon3 src={Icon3} alt="icon3" />
        </S.ThirdLeftIconContainer>
        <S.FourthLeftIconContainer>
          <S.Icon3 src={Icon4} alt="icon4" />
        </S.FourthLeftIconContainer>
      </S.RightElement>
    </S.Content>
  );
};

export default IconsSection;
