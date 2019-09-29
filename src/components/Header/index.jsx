import React from 'react';
import {
  NavBar,
  NavLink,
  HeaderCardStyle,
  HeaderStyle
} from './Styles';

class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <HeaderCardStyle>
          <div>
            <h1> KINNAN KWOK </h1>
          </div>
        </HeaderCardStyle>

        <NavBar>
          <NavLink href='/'> Home </NavLink>
          {/*<NavLink href='/blog'> Blog </NavLink>*/}
          <NavLink href='/resume'> Resume </NavLink>
          {/*<NavLink href='/contact'> Contact </NavLink>*/}
        </NavBar>
      </HeaderStyle>
    );
  }
}

export default Header;
