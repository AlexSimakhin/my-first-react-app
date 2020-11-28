import React from 'react';
import riotLogo from '../../../img/RiotGamesLogo.svg';
import valorantLogo from '../../../img/ValorantLogo.svg';


class CompanyLogo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('По ссылке лого.');
  }

  render() {
    return (
      <a href=" " className={'riot-games'} onClick={this.handleClick}>
        <img
          src={this.props.company.logoUrl}
          alt={this.props.company.name}
        />
      </a>
    );
  }
}

class GameLogo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('По ссылке лого.');
  }

  render() {
    return (
      <a href=" " className={'valorant'} onClick={this.handleClick}>
        <img
          src={this.props.game.logoUrl}
          alt={this.props.game.name}
        />
      </a>
    );
  }
}

const logos = {
  company: {
    name: 'RIOT Games',
    logoUrl: riotLogo,
  },
  game: {
    name: 'Valorant',
    logoUrl: valorantLogo,
  },
};

class Logo extends React.Component {
  render() {
    return (
      <div className={'logotips'}>
        <CompanyLogo company={logos.company} />
        <div className={'logo-line'}></div>
        <GameLogo game={logos.game} />
      </div>
    );
  }
}

export default Logo;