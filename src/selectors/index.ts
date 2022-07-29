import type { RootState } from 'store';

const valueSelector = (state: RootState) => state.display.value;
const historySelector = (state: RootState) => state.display.history;

export { valueSelector, historySelector };
