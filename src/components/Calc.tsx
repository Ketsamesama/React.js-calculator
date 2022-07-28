import './style.scss';
import Display from './Display';
import Buttons from './Buttons';

// придерживайся одинаковых импортаов во всех файлах, сначала импорты реакта,
// потом импорты библиотек потом импортируешь всякие экшены и типы потом компоненты и в самом конце картинки и стили,
// стили всегда должны быть последними

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
