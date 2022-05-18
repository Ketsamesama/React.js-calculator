import React from 'react'
import { useDispatch } from 'react-redux';
import { updateDisplayValue } from '../store/slices/Slices';

function Button({id, type, value}) {

  const dispatch = useDispatch()
  const btnStyle = {
    gridArea: `a${id}`,
  };

  return (
    <button className='btn' onClick={() => dispatch(updateDisplayValue({id, type, value}))} style={btnStyle}>{value}</button>
  )
}

export default Button