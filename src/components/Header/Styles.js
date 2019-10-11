import styled from 'styled-components'
import { media } from '../../style-utils'

export const HeaderStyle = styled.div`
  font-family: AvenirNextCondensed-DemiBold;
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const NavLink = styled.a`
  padding-top: 8%;
  display: block;
  padding-bottom: 10%
`

export const NavButton = styled.div`
  width: -webkit-fill-available;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;

  :hover {
    background-color: #303030;
  }

`

export const HeaderCardStyle = styled.div`
  display: flex;
  max-width: 400px;

  ${media.mediumUp`
    margin: inherit;
    max-width: inherit;
  `}
`
