import { css } from 'styled-components';

export const media = {
  medium: (...args) => css`
    @media (min-width: 768px) {
      ${ css(...args) }
    }
  `
};
