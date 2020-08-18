import { css } from '@emotion/core';
import theme from './theme';

const paddings = ({
  px,
  pxT,
  pxM,
  pl,
  plT,
  plM,
  p,
  pT,
  pM,
  pr,
  prT,
  prM,
  py,
  pyT,
  pyM,
  pt,
  ptT,
  ptM,
  pb,
  pbT,
  pbM,
}) => css`
  padding-left: ${theme.spacings[pl] || pl || theme.spacings[px] || px || theme.spacings[p]};
  padding-right: ${theme.spacings[pr] || pr || theme.spacings[px] || px || theme.spacings[p]};
  padding-top: ${theme.spacings[pt] || pt || theme.spacings[py] || py || theme.spacings[p]};
  padding-bottom: ${theme.spacings[pb] || pb || theme.spacings[py] || py || theme.spacings[p]};

  ${theme.media.tablet} {
    padding-left: ${theme.spacings[plT] || plT || theme.spacings[pxT] || pxT || theme.spacings[pT]};
    padding-right: ${theme.spacings[prT] ||
      prT ||
      theme.spacings[pxT] ||
      pxT ||
      theme.spacings[pT]};
    padding-top: ${theme.spacings[ptT] || ptT || theme.spacings[pyT] || pyT || theme.spacings[pT]};
    padding-bottom: ${theme.spacings[pbT] ||
      pbT ||
      theme.spacings[pyT] ||
      pyT ||
      theme.spacings[pT]};
  }

  ${theme.media.mobile} {
    padding-left: ${theme.spacings[plM] || plM || theme.spacings[pxM] || pxM || theme.spacings[pM]};
    padding-right: ${theme.spacings[prM] ||
      prM ||
      theme.spacings[pxM] ||
      pxM ||
      theme.spacings[pM]};
    padding-top: ${theme.spacings[ptM] || ptM || theme.spacings[pyM] || pyM || theme.spacings[pM]};
    padding-bottom: ${theme.spacings[pbM] ||
      pbM ||
      theme.spacings[pyM] ||
      pyM ||
      theme.spacings[pM]};
  }
`;

export default paddings;
