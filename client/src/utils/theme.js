export const screensWidth = {
  mobile: 449,
  tablet: 949,
  desktop: 1442,
};

export const media = {
  mobile: `@media (max-width: ${screensWidth.mobile}px)`,
  tablet: `@media (max-width: ${screensWidth.tablet}px)`,
  desktop: `@media (max-width: ${screensWidth.desktop}px)`,
};

export const breakpoints = [
  `${screensWidth.mobile}px`,
  `${screensWidth.tablet}px`,
  `${screensWidth.desktop}px`,
];

const blueFrom = '#0057A3';
const blueTo = '#00B2D5';
const cyanFrom = '#00B2D5';
const cyanTo = '#63C6BF';
const yellowFrom = '#FBAB18';
const yellowTo = '#FFDF4F';
const purpleFrom = '#00B2D5';
const purpleTo = '#63C6BF';
const pinkFrom = '#BD1A8D';
const pinkTo = '#D91473';

export const colors = {
  gray1: '#585858',
  gray2: '#F9F9F9',
  white: '#FFFFFF',
  black: '#000000',
  black2: '#1C1C1C',
  black3: '#585757',
  blue: '#0057A3',
  cyan: '#00A9CE',
  yellow: '#FFC709',
  pink: '#D91473',
  pinkLight: '#F9ECF2',
  purple: '#5E2E86',
  midnight: '#201751',
  blueGrad: `linear-gradient(90deg, ${blueFrom} 0%, ${blueTo} 100%)`,
  cyanGrad: `linear-gradient(90deg, ${cyanFrom} 0%, ${cyanTo} 100%)`,
  yellowGrad: `linear-gradient(90deg, ${yellowFrom} 0%, ${yellowTo} 100%)`,
  purpleGrad: `linear-gradient(90deg, ${purpleFrom} 0%, ${purpleTo} 100%)`,
  pinkGrad: `linear-gradient(90deg, ${pinkFrom} 0%, ${pinkTo} 100%)`,
  gray3: '#585858',
  gray4: '#B5B5B5',
  gray5: '#2F2F2F',
  gray6: '#969696',
  gray7: '#DBDBDB',
  sectionBackground: '#f5ebfe',
  footerBg: '#755e9e',
};

export const spacings = {
  0: '0rem',
  1: '0.5rem',
  2: '1rem',
  3: '1.5rem',
  4: '2rem',
  5: '3rem',
  6: '4rem',
  7: '7rem',
};

export const shadows = {
  db3: `
    0px 3px 4px rgba(0, 0, 0, 0.04),
    0px 3px 3px rgba(0, 0, 0, 0.03),
    0px 1px 8px rgba(0, 0, 0, 0.05);
  `,
  db1: `
    0px 1px 1px rgba(0, 0, 0, 0.04),
    0px 2px 1px rgba(0, 0, 0, 0.03),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  `,
};

export const borders = {
  tickPoint: `1px solid #eeeeee`,
};

export const vars = {
  columns: { mobile: 4, tablet: 6, desktop: 12 },
  gridGutter: { mobile: 8, tablet: 16, desktop: 16 },
  sectionPaddingTopD: '4rem',
  sectionPaddingBottomD: '4rem',
  sectionPaddingLeftD: '10%',
  sectionPaddingRightD: '10%',
  sectionPaddingTopT: '3rem',
  sectionPaddingBottomT: '3rem',
  sectionPaddingLeftT: '7%',
  sectionPaddingRightT: '7%',
  sectionPaddingTopM: '2rem',
  sectionPaddingBottomM: '2rem',
  sectionPaddingLeftM: '3%',
  sectionPaddingRightM: '3%',
  tickPointMinHeight: '6rem',
  graphicBurstImageWidth: '5rem',
  graphicBurstImageWidthLeft: '50%',
  graphicBurstTextWidth: '15.7rem',
  benefitImgaeMaxWidthD: '8rem',
  benefitImgaeMaxWidthT: '5rem',
  benefitImgaeMaxWidthM: '5.5rem',
  stepsImageMaxWidthDM: '17rem',
  stepsImageMaxHeight: '13rem',
  stepsImageMaxWidthT: '17.4rem',
  largeButtonHeight: '4rem',
  smallButtonHeight: '3rem',
  buttonBorderRadius: '8px',
  HeadersHeightD: '45.5rem',
};

export default {
  colors,
  spacings,
  shadows,
  screensWidth,
  media,
  breakpoints,
  vars,
  borders,
};
