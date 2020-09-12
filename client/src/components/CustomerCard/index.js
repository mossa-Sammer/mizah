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
    </>) : null
  );
};


export default CustomerCard;
