import styled from 'styled-components';
import { media } from '../../style-utils';

export const TableOfContentsDiv = styled.div`
  .sticky {
    position: sticky;
    top: 0;
    max-height: 100px;
  }

  display: none;

  ${ media.msmallUp`
    display: inherit;
  `}

`;
