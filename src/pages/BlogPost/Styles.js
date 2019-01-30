import styled from 'styled-components'
import { media } from '../../style-utils';

export const BodyContentStyle = styled.div`
  line-height: 1.2;
  width: 350px;

  ${ media.mediumUp`
    width: 700px;
  `}

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a:hover {
    color: hotpink;
    text-decoration: underline;

  }
  a:active {
    color: #df00ef;
  }
`
