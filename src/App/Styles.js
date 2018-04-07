import styled from 'styled-components';
import { media } from '../style-utils';

export const AppStyle = styled.div`
  h1 {
    margin-bottom: 10px;
    ${ media.mediumUp`
      font-size: 65px;
    `}
  }

  h2 {
    font-size: 15px;
    margin-left: 2px;
    ${ media.mediumUp`
      font-size: 25px;
    `}
  }
`;
