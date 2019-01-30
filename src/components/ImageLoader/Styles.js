import styled from 'styled-components';

// TODO: The placeholder height does not inherit from the actual content
// height. It would be good to find a way to inherit that style from the
// loaded image

export const ImageLoaderStyle = styled.div`
   .placeholder {
     background-color: ${props => props.color};
     height: 150px;
   }
`;
