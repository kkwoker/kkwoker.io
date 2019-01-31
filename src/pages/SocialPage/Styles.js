import styled from 'styled-components';
import { media } from '../../style-utils';

export const BlogPostsList = styled.div`
  max-width: 400px;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a:active {
    color: hotpink;
  }
`;

export const SocialPageDiv = styled.div`
  h2 {
    margin-left: 20px;
    ${ media.msmallUp`
      margin: 0;
    `}
  }

  .divider {
    text-align: center;
    font-size: 20px;
  }

  .home-link {
    margin-left: 20px;
  }
`;


export const ImageStyle = styled.div`
  .image {
    width: 400px;
    height: 200px;
    object-fit: cover;
  }

`;

export const ContentStyle = styled.div`
  text-align: justify;

  // For ellipsis overflow after N lines
  // Each line is 22px. Height needs to be N * 22px;
  // NOTE: something is using relative fonts. Calculations not correct.
  p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    width: 400px;
    height: 110px;
    overflow: hidden;
  }

  padding-left: 20px;
  padding-right: 20px;

  ${ media.msmallUp`
    padding: 0;
  `}
`;

