import { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform:  rotate(0deg) ;
  }
  20% {
    transform:  rotate(15deg) ;
  }
  40% {
    transform:  rotate(-10deg) ;
  }
  60% {
    transform:  rotate(5deg) ;
  }
  80% {
    transform:  rotate(-5deg) ;
  }
  100% {
    transform:  rotate(0deg) ;
  }
`;

export const wobble = keyframes`
  0% {
  -webkit-transform: none;
  transform: none;
  }
  15% {
  -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
  -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
  -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
  -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
  -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
  `;

export const rubberBand = keyframes`
    0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  30% {
  -webkit-transform: scale3d(1.25, 0.75, 1);
  transform: scale3d(1.25, 0.75, 1);
  }
  40% {
  -webkit-transform: scale3d(0.75, 1.25, 1);
  transform: scale3d(0.75, 1.25, 1);
  }
  50% {
  -webkit-transform: scale3d(1.15, 0.85, 1);
  transform: scale3d(1.15, 0.85, 1);
  }
  65% {
  -webkit-transform: scale3d(.95, 1.05, 1);
  transform: scale3d(.95, 1.05, 1);
  }
  75% {
  -webkit-transform: scale3d(1.05, .95, 1);
  transform: scale3d(1.05, .95, 1);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  `;

export const tada = keyframes`
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  10%, 20% {
  -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  `;

export const swing = keyframes`
    20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
    }
    100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
    }
    `;
