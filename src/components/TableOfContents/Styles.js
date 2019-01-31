import styled from 'styled-components';
import { media } from '../../style-utils';

export const TableOfContentsDiv = styled.div`
  .sticky {
    position: sticky;
    top: 0;
    max-height: 100px;
  }

  display: none;
  list-style-type: none;

  ${ media.mediumUp`
    display: inherit;
  `}

`;
