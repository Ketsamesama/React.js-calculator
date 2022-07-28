import { useAppSelector } from 'hooks';

import './style.scss';

function Display() {
  const dispayValue: string = useAppSelector((state) => state.display.value);
  const historyValue: string = useAppSelector((state) => state.display.history);

  return (
    <div className="display">
      <p className="input">{dispayValue}</p>
      <p className="history">{historyValue}</p>
    </div>
  );
}

export default Display;