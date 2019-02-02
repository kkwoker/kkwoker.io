import styled from 'styled-components'
import { media } from '../../style-utils';

export const BlogPostStyle = styled.div`
  h1 {
    margin-left: 10px;
  }
  sub {
    display: block;
    margin-left: 10px;
  }

  img {
    max-width: 320px;
    background-color: white;
    ${ media.msmallUp`
      max-width: 400px;
    `}
    ${ media.mediumUp`
      min-width: 700px;
    `}
  }
`;

export const ImageStyle = styled.div`
  img {
    max-width: 320px;
    background-color: white;
    ${ media.msmallUp`
      max-width: 400px;
    `}
    ${ media.mediumUp`
      min-width: 700px;
    `}
  }
  .placeholder {
    height: 350px;
  }
`;

export const BodyContentStyle = styled.div`
  // THIS IS THE RENDERED INNER HTML MARKDOWN STYLES

  line-height: 1.2;
  width: 320px;
  ${ media.msmallUp`
    width: 400px;
  `}
  margin-left: 10px;
  margin-right: 10px;
  font-family: Tahoma, sans-serif;

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
`
