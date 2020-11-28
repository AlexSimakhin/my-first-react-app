import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className={'footer'}>
        <a href={'https://github.com/AlexSimakhin'} target={'_blank'} rel={'noreferrer'} className={'author'}>
          Alexandr Simakhin — React Test Work.
        </a>
        <a href={'https://www.figma.com/community/file/828904636600001452'} target={'_blank'} rel={'noreferrer'} className={'figma-partner'}>
          Figma Template.
        </a>
      </footer>
    );
  }
}

export default Footer;