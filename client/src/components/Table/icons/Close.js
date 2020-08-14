/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Close = ({ width, height, color, ...props }) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.25 17.25L6.75 6.75"
      stroke={color || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.25 6.75L6.75 17.25"
      stroke={color || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Close;
