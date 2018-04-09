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

  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  position: relative;

  ${ media.mediumUp`
    max-width: 700px;
  `}
`;

export const HomeStyle = styled.div`
  .fade-in {
    display: 'inherit';
    animation-name: ${fadeIn};
    animation-duration: 0.2s;
    animation-timing-function: ease-out;
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

    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    ${ media.mediumUp`
      width: 200px;
      min-width: 200px;
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
`;

export const ContactStyle = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;

  font-size: 12px;
`;
