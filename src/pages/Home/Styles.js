import styled, { keyframes } from 'styled-components';
import { media } from '../../style-utils';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

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
  .fade-in {
    display: 'inherit';
    animation: ${fadeIn} 0.2s;
  }
  .hidden {
    display: 'none';
  }
  .profile-image {
    width: 92.5px;
    height: 98px;
    margin: 15px;
    border-radius: 50%;
    max-width: 200px;

    background-color: #cacaca;

    ${ media.mediumUp`
      width: 200px;
      height: 212px;
    `}
  }
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
