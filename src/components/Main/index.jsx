import React from 'react';
import Agents from './Agents';

class Main extends React.Component {
  render() {
    return (
      <main className={'main'}>
        <Agents/>
        <div className={'bg-image'}></div>
      </main>
    );
  }
}

export default Main;