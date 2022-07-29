import React, { FC } from 'react';

import { useAppDispatch } from 'hooks';
import { updateDisplayValue } from '../store/slices/slice';
import type { IPropsButton } from 'types';

const Button: FC<IPropsButton> = ({ id, type, value }) => {
  const dispatch = useAppDispatch();

  const onChangeValue = ({ id, type, value }: IPropsButton) =>
    dispatch(updateDisplayValue({ id, type, value }));

  const btnStyle = {
    gridArea: `a${id}`,
  };

  return (
    <button
      className="btn"
      onClick={() => onChangeValue({ id, type, value })}
      style={btnStyle}
    >
      {value}
    </button>
  );
};

export default Button;
