/* eslint-disable react/prop-types */
import React from 'react';

const Twitter = ({ width, height, color }) => (
  // eslint-disable-next-line consistent-return
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.3333 7.89905C28.3522 8.33461 27.2977 8.62794 26.1911 8.76016C27.3211 8.0835 28.1888 7.01127 28.5966 5.7335C27.54 6.36016 26.3688 6.81572 25.1222 7.06127C24.1255 5.99794 22.7022 5.3335 21.1288 5.3335C17.5966 5.3335 15.0011 8.62905 15.7988 12.0502C11.2533 11.8224 7.22218 9.64461 4.52329 6.33461C3.08996 8.7935 3.77996 12.0102 6.21551 13.6391C5.31996 13.6102 4.47551 13.3646 3.73885 12.9546C3.67885 15.4891 5.49551 17.8602 8.12663 18.3879C7.35663 18.5968 6.51329 18.6457 5.65551 18.4813C6.35107 20.6546 8.37107 22.2357 10.7666 22.2802C8.46663 24.0835 5.56885 24.889 2.66663 24.5468C5.08774 26.0991 7.9644 27.0046 11.0533 27.0046C21.2111 27.0046 26.95 18.4257 26.6033 10.7313C27.6722 9.95905 28.6 8.99572 29.3333 7.89905Z"
      fill={color || 'white'}
    />
  </svg>
);
export default Twitter;
