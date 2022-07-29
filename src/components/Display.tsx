import React from 'react';

import { DisplayValue, HistoryValue } from 'selectors';
import './style.scss';

function Display() {
  const dispayValue = DisplayValue();
  const historyValue = HistoryValue();
  return (
    <div className="display">
      <p className="input">{dispayValue}</p>
      <p className="history">{historyValue}</p>
    </div>
  );
}

export default Display;
