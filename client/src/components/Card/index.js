import React from 'react';
import * as S from './styled';

const trimText = text => `${text.substring(0, 30)}...`;
const Card = ({ item, lang }) => {
  return (
    <div style={{minWidth: 300, padding: 30 }}>
      <S.CardContainer>
        <S.ImageContainer>
          {item && item.image_url && <S.Img src={item.image_url} />}
        </S.ImageContainer>
        <div>
          <S.Title>{lang === 'en' ? item.title : item.title_ar}</S.Title>
          <S.Body>{trimText(lang === 'en' ? item.description : item.description_ar)}</S.Body>
        </div>
      </S.CardContainer>
    </div>
  );
};

export default Card;
