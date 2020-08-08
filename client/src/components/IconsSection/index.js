import React from 'react';
import * as S from './styled';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';

const IconsSection = ({slide}) => {
  return (
    <S.Content slide={slide}> 
    <S.LeftElement>
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
    </S.LeftElement>
    
    <S.RightElement>
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
  )
}

export default IconsSection;
