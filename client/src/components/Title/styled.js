import styled from '@emotion/styled';
import theme from '../../utils/theme';

export const H4Bold = styled.h4`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ lang }) => (lang === 'en' ? 'flex-start' : 'flex-end')};
  justify-content: center;
  width: 100%;
`;

export const Line = styled.div`
  margin-top: ${() => theme.spacings[1]};
  height: ${({ lightLine }) => (lightLine ? '0.25rem' : theme.spacings[1])};
  background: ${({ color = 'pink' }) => theme.colors[color]};
  width: 6rem;

  ${() => theme.media.mobile} {
    width: 4.5rem;
    height: 0.25rem;
  }
`;
