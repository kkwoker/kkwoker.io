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
    @media (min-width: 471px) {
      ${ css(...args) }
    }
  `,

  smallUp: (...args) => css`
    @media (min-width: 375px) {
      ${ css(...args) }
    }
  `,

  xsmallUp: (...args) => css`
    @media (min-width: 321px) {
      ${ css(...args) }
    }
  `
};
