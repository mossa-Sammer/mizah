import React from 'react';

import * as S from './style';

const Col = ({ w, children, ...props }) => {
  return (
    <S.Col xs={w[0]} sm={w[1]} md={w[2]} {...props}>
      {children}
    </S.Col>
  );
};

const Row = ({ jc, jcT, jcM, children, inner, ...props }) => {
  return (
    <div style={{ position: 'relative' }}>
      <S.Row jc={jc} jcT={jcT} jcM={jcM} inner={inner} {...props}>
        {children}
      </S.Row>
    </div>
  );
};

export { Row, Col };
