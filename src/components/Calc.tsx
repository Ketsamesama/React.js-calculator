import React from 'react';

import './style.scss';
import Display from './Display';
import Buttons from './Buttons';

function Calc() {
  return (
    <div className="calc">
      <header className="header">
        <h1>electronic calculator</h1>
      </header>
      <Display />
      <Buttons />
    </div>
  );
}

export default Calc;
