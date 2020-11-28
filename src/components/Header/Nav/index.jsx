import React from 'react';
import droplistIcon from '../../../img/droplistIcon.svg';


const menuList = [
  { li: 'GAME', droplist: false},
  { li: 'CHAMPIONS', droplist: false },
  { li: 'NEWS', droplist: true },
  { li: 'PATCH NOTES', droplist: false },
  { li: 'DISCOVER', droplist: true },
  { li: 'ESPORTS', droplist: false },
  { li: 'UNIVERSE', droplist: false },
  { li: 'SHOP', droplist: false },
  { li: 'SUPPORT', droplist: false }
];

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
  }

  render() {
    if (this.props.menuList.droplist) {
      return (
        <a href=" " className={'nav__dropdown'} onClick={this.handleClick}>
          {this.props.menuList.li}
          <img className={'nav__droplist-icon'}
            src={droplistIcon}
            alt={'Droplist Menu'}
          />
        </a>
      );
    }

    if (!this.props.menuList.droplist) {
      return (
        <a href=" " onClick={this.handleClick}>{this.props.menuList.li}</a>
      );
    }
  }
}

class ListRender extends React.Component {
  render() {
    let list = [];

    this.props.menu.forEach(item => {
      list.push(
        <ListItem
          menuList={item}
          key={item.li} />
      );
    });

    return (
      <li>
        {list}
      </li>
    );
  };
}

class Nav extends React.Component {
  render() {
    return (
      <nav className={'nav'}>
        <ul>
          <ListRender menu={menuList} />
        </ul>
      </nav>
    );
  }
}

export default Nav;