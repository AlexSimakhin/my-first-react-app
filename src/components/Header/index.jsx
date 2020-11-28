import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import UserProfile from './UserProfile';

class Header extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <div className={'header__left-side'}>
          <Logo />
          <Nav />
        </div>
        <UserProfile />
      </header>
    );
  }
}

export default Header;