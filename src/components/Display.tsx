import { useAppSelector } from 'hooks';

import './style.scss';

function Display() {
  // в идеале создать папку selectors и вынести в нее все такие (state) => state.display.value) колбэки
  // https://www.youtube.com/watch?v=SVG-x-4BQic&t=410s здест можешь посмотреть почему так
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
