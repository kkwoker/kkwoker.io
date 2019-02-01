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

export const BlogPost = styled.div`
  margin-left: 30px;
  margin-right: 40px;
  ${ media.msmallUp`
    margin: 0;
  `}
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
    text-align: center;
  }
`;


export const ImageStyle = styled.div`
  .image {
    width: 340px;
    height: 200px;
    object-fit: cover;
    ${ media.smallUp`
      width: 400px;
    `}

    background-color: grey;

    //display: table-cell;
    //text-align: center;
    //vertical-align: middle;
    //font-size: 70px;
  }

`;

export const ContentStyle = styled.div`
  text-align: justify;

  // For ellipsis overflow after N lines
  // Each line is 22px. Height needs to be N * 22px;
  // NOTE: something is using relative fonts. Calculations not correct.
  .overflow-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 105px;
    overflow: hidden;
  }

  padding-left: 20px;
  padding-right: 20px;

  ${ media.msmallUp`
    padding: 0;
  `}
`;

