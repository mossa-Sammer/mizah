import React from 'react';
import { LeftContainer, LeftWave } from './styled';

const LeftWaves = ({ hoverd, colors }) => {
  return (
    <LeftContainer>
      <LeftWave className="w1" hoverd={hoverd} color={colors.main} />
      <LeftWave className="w2" hoverd={hoverd} color={colors.main} />
      <LeftWave className="w3" hoverd={hoverd} color={colors.main} />
      <LeftWave className="w4" hoverd={hoverd} color={colors.main} />
      <LeftWave className="w5" hoverd={hoverd} color={colors.main} />
    </LeftContainer>
  );
};

export default LeftWaves;
