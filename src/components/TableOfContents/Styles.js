import styled from 'styled-components';
import { media } from '../../style-utils';

export const TableOfContentsDiv = styled.div`

  display: none;
  list-style-type: none;
  text-align: right;

  li {
    margin-top: 5px;
  }

  .sticky {
    position: sticky;
    top: 100px;
    max-height: 100px;
  }

  ${ media.mediumUp`
    display: inherit;
    margin-top: 200px;
  `}

`;
