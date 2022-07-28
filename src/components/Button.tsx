import { useAppDispatch } from 'hooks';
import { updateDisplayValue } from '../store/slices/Slices';

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
      onClick={() => dispatch(updateDisplayValue({ id, type, value }))}
      style={btnStyle}
    >
      {value}
    </button>
  );
}

export default Button;
