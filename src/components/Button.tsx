import { useAppDispatch } from 'hooks';
import { updateDisplayValue } from '../store/slices/slice';

// советую во всех файлах компонентов импортировать React

function Button({
  id,
  type,
  value,
}: {
  id: number;
  type: string;
  value: string;
}) {
  const dispatch = useAppDispatch();
  const btnStyle = {
    gridArea: `a${id}`,
  };

  return (
    <button
      className="btn"
      // я бы лучше написал просто функцию и потом прокидывал ее в onClick
      // в линию не очень читабельно
      onClick={() => dispatch(updateDisplayValue({ id, type, value }))}
      style={btnStyle}
    >
      {value}
    </button>
  );
}

export default Button;
