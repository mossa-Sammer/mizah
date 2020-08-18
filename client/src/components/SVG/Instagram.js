/* eslint-disable react/prop-types */
import React from 'react';

const Instagram = ({ width, height, color }) => (
  // eslint-disable-next-line consistent-return

  <svg
    fill={color || '#000000'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    width={width || '26px'}
    height={height || '26px'}
  >
    <path
      fill="none"
      stroke={color || '#000000'}
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M7.546,25h10.909C22.07,25,25,22.07,25,18.454V7.545C25,3.93,22.07,1,18.454,1H7.545C3.93,1,1,3.93,1,7.546v10.909C1,22.07,3.93,25,7.546,25z"
    />
    <path
      fill="none"
      stroke={color || '#000000'}
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M13 7A6 6 0 1 0 13 19A6 6 0 1 0 13 7Z"
    />
    <path d="M20.5 4A1.5 1.5 0 1 0 20.5 7A1.5 1.5 0 1 0 20.5 4Z" />
  </svg>
);
export default Instagram;
