import styled from 'styled-components';
import { media } from '../../style-utils';

export const BioStyle = styled.div`
  border: #88aeff6e;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  padding: 10px 30px;
  height: 500px;

  ${ media.mediumUp`
    max-width: 700px;
  `}
`;

export const HomeStyle = styled.div`
  img {
    width: 25%;
    height: 25%;
    margin: 15px;
    border-radius: 50%;
    max-width: 200px;

    ${ media.mediumUp`
      width: 50%;
      height: 50%;
    `}
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  
  ${ media.mediumUp`
    margin-right: 100px;
    margin-left: 100px;
  `}
`;

export const HeaderCardStyle = styled.div`
  display: flex;
  max-width: 400px;
  margin: auto;

  ${ media.mediumUp`
    margin: inherit;
    max-width: inherit;
  `}
`
