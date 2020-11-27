import React from 'react';
import riotLogo from '../../../img/RiotGamesLogo.svg';
import valorantLogo from '../../../img/ValorantLogo.svg';


function CompanyLogo(props) {
  return (
    <img className="riot-games"
      src={props.company.logoUrl}
      alt={props.company.name}
    />
  );
};

function GameLogo(props) {
  return (
    <img className="valorant"
      src={props.game.logoUrl}
      alt={props.game.name}
    />
  );
};

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