import { ReturnState } from 'store/slices/types';

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

export { checkOperatorRepeat };
