import React from 'react';
import * as S from './styled';

const CustomerCard = ({ item, lang }) => {
  return (
    item && item.logo_url ? 
      (<><S.Wrapper>
      <S.Container 
      className="container"
      bg={item.logo_url}
    >
    </S.Container>
    </S.Wrapper>
      <S.Name>{lang === 'en'? item.name : item.name_ar}</S.Name>
    </>) : <h2>Loading..</h2>
  );
};


export default CustomerCard;
