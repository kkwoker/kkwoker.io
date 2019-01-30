import styled from 'styled-components';
import { media } from '../../style-utils';

export const SocialPageDiv = styled.div`
  .divider {
    text-align: center;
    font-size: 20px;
  }

  max-width: 400px;

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

  padding-left: 10px;
  padding-right: 10px;

  ${ media.msmallUp`
    padding: 0px;
  `}
`;

