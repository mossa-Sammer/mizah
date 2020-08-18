/* eslint-disable react/prop-types */
import React from 'react';

const Close = ({ width, height, color }) => (
  // eslint-disable-next-line consistent-return
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '24'}
    height={height || '24'}
    fill={color || 'black'}
    viewBox="0 0 18 18"
  >
    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
  </svg>
);
export default Close;
