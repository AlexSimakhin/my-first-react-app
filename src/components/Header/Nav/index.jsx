import React from 'react';


const menuList = [
  { li: 'GAME', dropdown: false},
  { li: 'CHAMPIONS', dropdown: false },
  { li: 'NEWS', dropdown: true },
  { li: 'PATCH NOTES', dropdown: false },
  { li: 'DISCOVER', dropdown: true },
  { li: 'ESPORTS', dropdown: false },
  { li: 'UNIVERSE', dropdown: false },
  { li: 'SHOP', dropdown: false },
  { li: 'SUPPORT', dropdown: false }
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
    return (
      <a href=" " onClick={this.handleClick}>{this.props.li}</a>
    );
  }
}

class ListRender extends React.Component {
  render() {
    let list = [];

    this.props.menu.forEach(item => {
      list.push(
        <ListItem
          li={item.li}
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