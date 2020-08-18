/* eslint-disable react/prop-types */
import React from 'react';

const Menu = ({ width, height, color }) => (
  // eslint-disable-next-line consistent-return
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill={color || 'none'}
    stroke={color || 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
export default Menu;
