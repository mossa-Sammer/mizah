import styled from '@emotion/styled';
import theme from '../../utils/theme';

import margins from '../../utils/caluclateMargins';
import paddings from '../../utils/caluclatePaddings';

export const Row = styled.div`
  ${margins};
  ${paddings};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -${({ inner }) => (inner ? theme.vars.gridGutter.desktop : theme.vars.gridGutter.desktop / 2)}px !important;
  margin-right: -${({ inner }) => (inner ? theme.vars.gridGutter.desktop : theme.vars.gridGutter.desktop / 2)}px !important;

  width: ${({ inner }) => (inner ? `calc(100% + ${theme.vars.gridGutter.desktop}px)` : '100%')};

  justify-content: ${({ jc }) => jc || 'flex-start'};
  ${() => theme.media.tablet} {
    justify-content: ${({ jc, jcT }) => jcT || jc || 'flex-start'};
    width: ${({ inner }) => (inner ? `calc(100% + ${theme.vars.gridGutter.tablet}px)` : '100%')};
    margin-left: -${({ inner }) => (inner ? theme.vars.gridGutter.tablet : theme.vars.gridGutter.tablet / 2)}px !important;
    margin-right: -${({ inner }) => (inner ? theme.vars.gridGutter.tablet : theme.vars.gridGutter.tablet / 2)}px !important;
  }
  ${() => theme.media.mobile} {
    justify-content: ${({ jc, jcT, jcM }) => jcM || jcT || jc || 'flex-start'};
    width: ${({ inner }) => (inner ? `calc(100% + ${theme.vars.gridGutter.mobile}px)` : '100%')};
    margin-left: -${({ inner }) => (inner ? theme.vars.gridGutter.mobile : theme.vars.gridGutter.mobile / 2)}px !important;
    margin-right: -${({ inner }) => (inner ? theme.vars.gridGutter.mobile : theme.vars.gridGutter.mobile / 2)}px !important;
  }
`;

export const Col = styled.div`
  ${margins};
  ${paddings};
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  min-height: 1px;

  flex-basis: ${({ md }) => `calc(${(md / theme.vars.columns.desktop) * 100}%)`};
  max-width: ${({ md }) => `calc(${(md / theme.vars.columns.desktop) * 100}%)`};

  display: ${({ md }) => (md ? 'block' : 'none')};
  ${() => theme.media.tablet} {
    display: ${({ sm }) => (sm ? 'block' : 'none')};
    flex-basis: ${({ sm }) => `calc(${(sm / theme.vars.columns.tablet) * 100}%)`};
    max-width: ${({ sm }) => `calc(${(sm / theme.vars.columns.tablet) * 100}%)`};
  }
  ${() => theme.media.mobile} {
    display: ${({ xs }) => (xs ? 'block' : 'none')};
    flex-basis: ${({ xs }) => `calc(${(xs / theme.vars.columns.mobile) * 100}%)`};
    max-width: ${({ xs }) => `calc(${(xs / theme.vars.columns.mobile) * 100}%)`};
  }
`;
