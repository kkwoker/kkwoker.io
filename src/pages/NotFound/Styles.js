import styled from 'styled-components';
import { media } from '../../style-utils';

export const NotFoundStyle = styled.div`
  h1 {
    max-width: 400px;
    ${ media.mediumUp`
      max-width: inherit;
    `}
  }
  img {
    height: 280px;
    margin-top: 15px;
    margin-bottom: 25px;

    ${ media.mediumUp`
      height: 400px;
    `}
  }
`
