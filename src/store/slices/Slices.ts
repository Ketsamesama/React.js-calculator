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
        console.log(result.slice(0, -2))

        result = result.slice(0, -1) + (actionValue === 'x' ? '*' : actionValue);
        stateValue = stateValue.slice(0, -1) + actionValue;
        stateHistory = stateHistory.slice(0, -1) + actionValue;
    } else {

        result += (actionValue === 'x' ? '*' : actionValue);
        stateValue += actionValue;
        stateHistory += actionValue;
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
                case 'numbers':
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
                    if (value === '=') {
                        state.result = eval(state.result);
                        state.value = state.result;
                        state.history += `${value}${state.result}`;
                    }
                    else {
                        let newState = checkOperatorRepeat(state.value, state.history, state.result, value);
                        state.value = newState.stateValue;
                        state.history = newState.stateHistory;
                        state.result = newState.result;
                    }
                    break;
                case 'special':
                    switch (value) {
                        case 'ac':
                            state.value = '0';
                            state.history = '0'
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
        }
    }
})

export const { updateDisplayValue } = slice.actions;
export default slice.reducer
