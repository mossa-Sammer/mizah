import styled from '@emotion/styled';
import theme from '../../../utils/theme';

const SectionWrapper = styled.div`
  width: '100%';
  position: relative;
  // z-index: ${({ footer }) => footer && 9999};
  background-color: ${({ bgcolor }) => theme.colors[bgcolor] || bgcolor};
  background-image: ${({ bgcolor, bgimg, isGradient }) =>
    (bgimg && `url(${bgimg})`) || (isGradient && bgcolor && theme.colors[bgcolor])};
  padding-left: ${() => theme.vars.sectionPaddingLeftD};
  padding-right: ${() => theme.vars.sectionPaddingRightD};
  padding-top: ${({ addPaddingY }) => (addPaddingY ? theme.vars.sectionPaddingTopD : 0)};
  padding-bottom: ${({ addPaddingY }) => (addPaddingY ? theme.vars.sectionPaddingBottomD : 0)};

  ${() => theme.media.tablet} {
    width: ${footer => (footer ? '100%' : '80%')};
    padding-left: ${({ footer }) => (footer ? 0 : theme.vars.sectionPaddingLeftT)};
    padding-right: ${({ footer }) => (footer ? 0 : theme.vars.sectionPaddingRightT)};
    padding-top: ${({ addPaddingY }) => (addPaddingY ? theme.vars.sectionPaddingTopT : 0)};
    padding-bottom: ${({ addPaddingY }) => (addPaddingY ? theme.vars.sectionPaddingBottomT : 0)};
  }
`;

export default SectionWrapper;
