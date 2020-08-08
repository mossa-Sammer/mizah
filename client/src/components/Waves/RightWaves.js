import React from 'react';

import { RightContainer, RightWave } from './styled';

const RightWaves = ({ hoverd, colors }) => {
  return (
    <RightContainer>
      <RightWave className="w1" hoverd={hoverd} color={colors.main} />
      <RightWave className="w2" hoverd={hoverd} color={colors.main} />
      <RightWave className="w3" hoverd={hoverd} color={colors.main} />
      <RightWave className="w4" hoverd={hoverd} color={colors.main} />
      <RightWave className="w5" hoverd={hoverd} color={colors.main} />
    </RightContainer>
  );
};
export default RightWaves;
