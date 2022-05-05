import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// actual animations idk

// Bath animation
export const bathAnimation = keyframes`
  0% {transform: translateY(20px);}
  50% {transform: translateY(-20px);}
  100% {transform: translateY(20px);}
`

// Knife bobbing animation
export const breatheAnimation = keyframes`
  0% {transform: scale(1);}
  50% {transform: scale(1.05);}
  100% {transform: scale(1);}
`

// Knife cutting animation
export const cutAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20px, 60px);
  }
`