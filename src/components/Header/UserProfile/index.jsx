import React from 'react';
import droplistIcon from '../../../img/droplistIcon.svg';
import userAvatar from '../../../img/UserAvatar.png';


const user = {
  name: 'Alex',
  srcAvarat: userAvatar,
};

class UserInfo extends React.Component {
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
      <a href={' '} className={'user-info'} onClick={this.handleClick}>
        <img className={'user-avatar'}
          src={this.props.user.srcAvarat}
          alt={this.props.user.name}
        />
        <p>{this.props.user.name}</p>
      </a>
    );
  }
}

class UserSettings extends React.Component {
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
      <div className={'user-settings'} onClick={this.handleClick}>
        <img className={'user-settings__droplist'}
          src={this.props.droplistIcon}
          alt={'Droplist settings'}
        />
      </div>
    );
  }
}

class UserProfile extends React.Component {
  render() {
    return (
      <div className={'user-profile'}>
        <UserInfo user={user} />
        <UserSettings droplistIcon={droplistIcon} />
      </div>
    );
  }
}

export default UserProfile;