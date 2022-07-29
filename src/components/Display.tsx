import React from 'react';

import { useAppSelector } from 'hooks';
import { valueSelector, historySelector } from 'selectors';
import './style.scss';

function Display() {
  const dispayValue = useAppSelector(valueSelector);
  const historyValue = useAppSelector(historySelector);
  return (
    <div className="display">
      <p className="input">{dispayValue}</p>
      <p className="history">{historyValue}</p>
    </div>
  );
}

export default Display;
