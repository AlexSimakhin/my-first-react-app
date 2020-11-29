import React from 'react';
import Characters from './Characters';

function Title() {
  return (
    <div className={'title-block'}>
      <h1 className={'title'}>AGENTS</h1>
    </div>
  );
};

class Agents extends React.Component {
  render() {
    return (
      <section className={'section'}>
        <Title/>
        <Characters />
      </section>
    );
  }
}

export default Agents;