import styled from 'styled-components';
import { media } from '../../style-utils';

export const BackgroundImage = styled.div`

  background-image: url("https://upload.wikimedia.org/wikipedia/commons/6/64/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg");
  background-position: -30px;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 258px;
  max-height: 258px;
  margin: -15px;
  transform: scaleX(1.1);

  ${ media.msmallUp`
    background-position: center;
  `}

  ${ media.mediumUp`
    transform: scaleX(1.5);
    transform-origin: center;
  `}

  ${ media.largeUp`
    background-position: center -40px;
  transform: scaleX(1.8);
  `}
`;

export const ArticleList = styled.div`
  div {
  }
`;
