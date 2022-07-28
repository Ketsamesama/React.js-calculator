import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

interface IState {
  value: string;
  history: string;
  result: string;
  prevOperator: string[];
}

interface ReturnState {
  result: string;
  stateValue: string;
  stateHistory: string;
}

const initialState: IState = {
  value: '0',
  history: '0',
  result: '0',
  prevOperator: [],
};

const checkOperatorRepeat = (
  stateValue: string,
  stateHistory: string,
  result: string,
  actionValue: string
): ReturnState => {
  const penultimateCharacter = stateValue[stateValue.length - 1];
  if (
    //is the penultimate operator
    penultimateCharacter === '+' ||
    penultimateCharacter === '-' ||
    penultimateCharacter === '/' ||
    penultimateCharacter === 'x'
  ) {
    result = result.slice(0, -1) + (actionValue === 'x' ? '*' : actionValue);
    stateValue = actionValue;
    stateHistory = stateHistory.slice(0, -1) + actionValue;
  } else {
    result += actionValue === 'x' ? '*' : actionValue;
    stateValue = actionValue;
    stateHistory += actionValue;
  }
  return {
    result,
    stateValue,
    stateHistory,
  };
};

interface IAction {
  id: number;
  type: string;
  value: string;
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    updateDisplayValue: (state: IState, action: PayloadAction<IAction>) => {
      const value = action.payload.value;

      switch (action.payload.type) {
        case 'digits':
          if (state.value.length === 8) {
            state.result = '0';
            state.value = '0';
            state.history = 'Digit Limit Met';
            break;
          }
          if (value === '0' && state.value.slice(-1) === '/') {
            state.value = '...';
            state.history = "can't divide by zero!";
            state.result = '0';
            break;
          }

          if (state.value === '0') {
            state.result = value;
            state.value = value;
            state.history = value;
          } else {
            state.result += value;
            state.value += value;
            state.history += value;
          }
          break;
        case 'operator':
          state.prevOperator.push(value);
          if (value === '=') {
            if (state.prevOperator[state.prevOperator.length - 2] === '=') {
              break;
            } else {
              state.result = String(
                Math.floor(+eval(state.result) * 100) / 100
              );
              state.value = state.result;
              state.history += `${value}${state.result}`;
            }
          } else {
            let newState = checkOperatorRepeat(
              state.value,
              state.history,
              state.result,
              value
            );
            state.value = newState.stateValue;
            state.history = newState.stateHistory;
            state.result = newState.result;
            if (state.prevOperator[state.prevOperator.length - 2] === '=') {
              state.history = state.result.slice(0, -1) + value;
            }
          }
          break;
        case 'special':
          switch (value) {
            case 'ac':
              state.value = '0';
              state.history = '0';
              state.result = '0';
              state.prevOperator = [];
              break;
            case '<':
              if (state.value.length === 1) {
                state.value = '0';
              } else {
                state.value = state.value.slice(0, state.value.length - 1);
              }
              break;
            case '.':
              if (state.value.slice(-1) === '.') {
                break;
              } else {
                state.result += ',';
                state.value += value;
                state.history += value;
              }
              break;
            default:
          }
          break;
        default:
      }
    },
  },
});

export const { updateDisplayValue } = slice.actions;
export default slice.reducer;
