import React from 'react';
import styled, { css } from 'styled-components';
import phoenix from '../../../../img/phoenix.png';

const Img = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${props =>
    props.url &&
    css`
      background: url(${props.url}) no-repeat;
    `
  };
  
  background-size: 205%;
  background-position: -90px -60px;
  transition: 1s;

  &:hover {
    content: '';
    background-position: -116px -60px;
    background-size: 215%;
  }
`;

const Skills = styled.div`
  position: fixed;
  z-index: 999;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 75px;
  width: inherit;
  transform: translate(15px,15px);
  background: #1F2326;
  border: 1.3px solid #F8F8F8;

  .skill {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class CharSkills extends React.Component {
  render() {
    return (
      <Skills>
        <div className={'skill'}>1</div>
        <div className={'skill'}>1</div>
        <div className={'skill'}>1</div>
        <div className={'skill'}>1</div>
      </Skills>
    );
  }
}

class Character extends React.Component {
  render() {
    let url = this.props.characters[0].img;
    return (
      <div className={'char-card'}>
        <h3>{this.props.characters[0].name}</h3>
        <p>{this.props.characters[0].nationality}</p>
        <CharSkills />
        <Img url={url}></Img>
      </div>
    );
  }
}

class CharacterList extends React.Component {
  render() {
    return (
      <Character characters={this.props.characters}/>
    );
  }
}

const characters = [
  {
    name: 'PHOENIX',
    nationality: 'United Kingdom',
    img: phoenix,
    skills: ['1', '2', '3', '4'],
  }//,
  // {
  //   name: 'PHOENIX',
  //   nationality: 'United Kingdom',
  //   skills: ['1', '2', '3', '4'],
  // },
  // {
  //   name: 'PHOENIX',
  //   nationality: 'United Kingdom',
  //   skills: ['1', '2', '3', '4'],
  // },
  // {
  //   name: 'PHOENIX',
  //   nationality: 'United Kingdom',
  //   skills: ['1', '2', '3', '4'],
  // }
];

class Characters extends React.Component {
  render() {
    return (
      <div className={'char-list'}>
        <CharacterList characters={characters} />
      </div>
    );
  }
}

export default Characters;


// <div className={'char-card__img'}>
//           <img
//             src={this.props.characters[0].img}
//             alt={this.props.characters[0].name}
//           />
//         </div>