import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

function Display() {

  interface State {
    display: {
      value: string
      history: string
      result: string
    }
  }

  const dispayValue: string = useSelector((state: State): string => state.display.value)
  const historyValue: string = useSelector((state: State): string => state.display.history)

  return (
    <div className='display'>
      <p className='input'>{dispayValue}</p>
      <p className='history'>{historyValue}</p>
    </div>
  )
}

export default Display