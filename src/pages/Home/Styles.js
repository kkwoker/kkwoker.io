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

  .enter-link {
    border: 1px solid #303030;
    background-color: #202020
    border-radius: 35px;

    outline: none;
    cursor: pointer;

    font-family: inherit;
    color: inherit;
    width: 100%;

    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    transition: background-color .3s;

    :hover, :focus {
      background-color: #1a1a1a;
    }

    :before {
      content: "";

      position: absolute;
      top: 50%;
      left: 50%;

      display: block;
      width: 0;
      padding-top: 0;

      border-radius: 100%;

      background-color: #232323;
      //background-color: rgba(20, 20, 20, .3);

      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    :active:before {
      width: 120%;
      padding-top: 120%;

      transition: width .2s ease-out, padding-top .2s ease-out;
    }

    padding-top: 20px;
    padding-bottom: 20px;

    ${ media.mediumUp`
      padding-top: 60px;
      padding-bottom: 70px;
    `}
  }

  .enter-link > * {
    position: relative;
  }


  max-width: 500px;

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
  margin-top: 15px;
  padding-bottom: 25px;
  font-size: 12px;
`;
