import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

// TODO: The placeholder height does not inherit from the actual content
// height. It would be good to find a way to inherit that style from the
// loaded image
//
// The input component, styledComponent requires to set a height attribute

export const ImageLoaderStyle = styled.div`
  .placeholder {
    background-color: ${props => props.color};
  }

  .fade-in {
    animation: ${fadeIn} 0.2s;
  }
`;

export const DefaultImageStyle = styled.div`
  height: 150px;
`
