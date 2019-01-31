import styled, { keyframes } from 'styled-components';
import { media } from '../../style-utils';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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

export const BioStyle = styled.div`
  //border: #88aeff6e;
  //border-width: 2px;
  //border-style: solid;
  //border-radius: 10px;
  //padding: 10px 30px;
  padding-bottom: 70px;

  //box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  position: relative;

  ${ media.mediumUp`
    max-width: 700px;
  `}

  .enter-link {
    text-align: center;
    font-size: 2em;
    text-decoration: underline;
  }
`;

export const HomeStyle = styled.div`
  .fade-in {
    display: 'inherit';
    animation-name: ${fadeIn};
    animation-duration: 0.2s;
    animation-timing-function: ease-out;
  }
  .loader {
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 2s linear infinite;
  }

  .profile-image {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 92.5px;
    height: 98px;
    margin: 15px;
    border-radius: 50%;
    max-width: 200px;

    background-color: #cacaca;

    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    ${ media.mediumUp`
      margin-top: 10px;
      width: 150px;
      min-width: 150px;
      height: 150px;
    `}
  }
`;

export const ContactStyle = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;

  font-size: 12px;
`;
