import styled from 'styled-components'
import { media } from '../../style-utils';

export const BodyContentStyle = styled.div`
  line-height: 1.2;
  width: 350px;

  ${ media.mediumUp`
    width: 700px;
  `}

  h2 a {
    color: inherit;
    text-decoration: inherit;
  }

  h2 a:hover {
    color: hotpink;
    text-decoration: underline;

  }

  h2 a:active {
    color: #df00ef;
  }

  img {
    max-width: 400px;
    background-color: white;
  }
`
