import React from 'react';

import Button from './Button';
import { buttons } from 'const';
import type { IButtons } from 'types';

function Buttons() {
  return (
    <div className="buttons">
      {buttons.map((state: IButtons) => (
        <Button {...state} key={state.id} />
      ))}
    </div>
  );
}

export default Buttons;
