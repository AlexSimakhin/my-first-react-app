import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import UserProfile from './UserProfile';

class Header extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <Logo />
        <Nav />
        <UserProfile />
      </header>
    );
  }
}

export default Header;