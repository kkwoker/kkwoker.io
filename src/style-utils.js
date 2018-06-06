import { css } from 'styled-components';

export const media = {
  largeUp: (...args) => css`
    @media (min-width: 1080px) {
      ${ css(...args) }
    }
  `,

  mediumUp: (...args) => css`
    @media (min-width: 768px) {
      ${ css(...args) }
    }
  `,

  msmallUp: (...args) => css`
    @media (min-width: 470px) {
      ${ css(...args) }
    }
  `,

  smallUp: (...args) => css`
    @media (min-width: 320px) {
      ${ css(...args) }
    }
  `
};
