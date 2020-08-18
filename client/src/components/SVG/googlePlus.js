/* eslint-disable react/prop-types */
import React from 'react';

const googlePlus = ({ width, height, color }) => (
  // eslint-disable-next-line consistent-return

  <svg
    fill={color || '#000000'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width || '50px'}
    height={height || '50px'}
  >
    <path d="M25 11H27V19H25z" />
    <path d="M22 14H30V16H22zM19.815 14.2l-.05-.2H11v3h6c-.477 2.837-3.028 5-6 5-3.314 0-6-2.686-6-6s2.686-6 6-6c1.5 0 2.868.554 3.92 1.465l2.151-2.106C15.471 7.894 13.34 7 11 7c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9C20 15.383 19.934 14.782 19.815 14.2z" />
  </svg>
);
export default googlePlus;
