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

interface IAction {
  id: number;
  type: string;
  value: string;
}

export type { IState, ReturnState, IAction };
