import React from 'react';

const LeftArrow = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.01812 5.76928C8.66063 6.12678 8.66063 6.70428 9.01812 7.06178L12.5748 10.6184L9.01812 14.1751C8.66063 14.5326 8.66063 15.1101 9.01812 15.4676C9.37562 15.8251 9.95312 15.8251 10.3106 15.4676L14.5181 11.2601C14.8756 10.9026 14.8756 10.3251 14.5181 9.96762L10.3106 5.76012C9.96229 5.41178 9.37562 5.41178 9.01812 5.76928Z"
      fill={color}
    />
  </svg>
);
export default LeftArrow;
