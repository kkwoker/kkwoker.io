import React from 'react'
import {
  NavBar,
  NavLink,
  HeaderCardStyle,
  HeaderStyle,
  NavButton
} from './Styles'

class Header extends React.Component {
  render () {
    return (
      <HeaderStyle>
        <HeaderCardStyle>
          <div>
            <h1> KINNAN KWOK </h1>
          </div>
        </HeaderCardStyle>

        <NavBar>
          <NavButton>
            <NavLink href='/'> Home </NavLink>
          </NavButton>

          {/* <NavLink href='/blog'> Blog </NavLink> */}

          <NavButton>
            <NavLink href='/resume'> Resume </NavLink>
          </NavButton>

          {/* <NavLink href='/contact'> Contact </NavLink> */}
        </NavBar>
      </HeaderStyle>
    )
  }
}

export default Header
