import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    value: '0',
    history: '0',
    result: '0',
};

interface ReturnState {
    result: string,
    stateValue: string,
    stateHistory: string
}

const checkOperatorRepeat = (stateValue: string, stateHistory: string, result: string, actionValue: string): ReturnState => {
    if (stateValue[stateValue.length - 1] === '+' || stateValue[stateValue.length - 1] === '-' ||
        stateValue[stateValue.length - 1] === '/' || stateValue[stateValue.length - 1] === 'x') {
        console.log(result.slice(0, -1))
        result = result.slice(0, -1) + (actionValue === 'x' ? '*' : actionValue);
        stateValue = stateValue.slice(0, -1) + (actionValue === 'x' ? '*' : actionValue);
        stateHistory = stateHistory.slice(0, -1) + (actionValue === 'x' ? '*' : actionValue);
    } else {
        result += (actionValue === 'x' ? '*' : actionValue);
        stateValue += (actionValue === 'x' ? '*' : actionValue);
        stateHistory += (actionValue === 'x' ? '*' : actionValue);
    }
    return {
        result,
        stateValue,
        stateHistory,
    }
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        updateDisplayValue: (state, action) => {
            const value = action.payload.value;

            switch (action.payload.type) {
                case 'symbol':
                    if (state.value === '0') {
                        if (value === '.') {
                            state.result += ',';
                            state.value += value;
                            state.history += value;
                        } else {
                            state.result = value;
                            state.value = value;
                            state.history = value;

                        }
                    } else {
                        state.result += value;
                        state.value += value;
                        state.history += value;
                    }
                    break;
                case 'operator':
                    if (value === '=') {
                        state.result = eval(state.result);
                        state.value = state.result;
                        state.history += `${value}${state.result}`;
                        break;
                    }
                    else {
                        state.value = checkOperatorRepeat(state.value, state.history, state.result, value).stateValue;
                        state.history = checkOperatorRepeat(state.value, state.history, state.result, value).stateHistory;
                        state.result = checkOperatorRepeat(state.value, state.history, state.result, value).result;
                    }


                    state.result += value;
                    state.value += `${value}`
                    state.history += `${value}`;
                    break;
                case 'special':
                    if (value === 'ac') {
                        state.value = '0';
                        state.history = '0'
                    } else if (value === '<') {
                        debugger
                        if (state.value.length === 1) {
                            state.value = '0';
                        } else {
                            state.value = state.value.slice(0, state.value.length - 1);
                        }
                    }
                    break
                default:
            }


        }
    }

})

export const { updateDisplayValue } = slice.actions;
export default slice.reducer
