import React from 'react';
import * as S from './styled';

// renders headlines with line underneath
const HeadlineTitle = ({ children, color = 'midnight', lineColor, lang, lightLine, ...rest }) => {
  return (
    <S.Wrapper lang={lang}>
      <S.H4Bold color={color} {...rest}>
        {children}
      </S.H4Bold>
      <S.Line color={lineColor} lightLine={lightLine} />
    </S.Wrapper>
  );
};

export default HeadlineTitle;
