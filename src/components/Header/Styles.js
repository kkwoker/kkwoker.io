import styled from 'styled-components';
import { media } from '../../style-utils';

export const HeaderStyle = styled.div`

`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const NavLink = styled.a`

`;

export const HeaderCardStyle = styled.div`
  display: flex;
  max-width: 400px;

  ${ media.mediumUp`
    margin: inherit;
    max-width: inherit;
  `}
`;
