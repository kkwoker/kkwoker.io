import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const SongsListStyle = styled.div`
  .fade-in {
    display: 'inherit';
    animation: ${fadeIn} 0.2s;
  }
  .image {
    width: 150px;
  }
  display: flex;
  flex-wrap: wrap;
`;

export const SongStyle = styled.div`
  max-width: 170px;
`
