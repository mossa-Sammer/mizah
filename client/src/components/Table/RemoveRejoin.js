import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// import Wrapper from './style';
import { styled } from '@material-ui/core/styles';
import Icon from './Icon';

const Wrapper = styled('div')(({ theme, type }) => ({
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  display: 'flex',
  flexDirection: type === 'Re-join' && 'column',
  justifyContent: 'flexStart',
  alignItems: 'center',
  outline: 'none',

  '& p': {
    fontSize: type === 'Re-join' && '14px',
    lineHeight: type === 'Re-join' && '15px',
  },

  [theme.breakpoints.tablet]: {
    flexDirection: 'row',

    '& p': {
      fontSize: '14px',
      lineHeight: '15px',
    },
  },
}));

const RemoveRejoin = ({ handleClick, showText, type, loading, text }) => (
  <Wrapper type={type}>
    <IconButton
      onClick={handleClick}
      type={type}
      disabled={loading}
      aria-label="remove or rejoin member"
    >
      {!loading ? (
        <Icon
          icon={type === 'Remove' || type === 'Clear' ? 'close' : 'plus'}
          color={type === 'Remove' || type === 'Clear' ? 'pink' : 'cyan'}
          width="22px"
          height="22px"
          margin="0 5px 0 0"
        />
      ) : (
        'Loading...'
      )}
      {showText && <p color="gray3">{loading ? 'loading' : text || type}</p>}
    </IconButton>
  </Wrapper>
);
export default RemoveRejoin;
