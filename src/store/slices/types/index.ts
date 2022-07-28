interface IState {
  value: string;
  history: string;
  result: string;
  prevOperator: string[];
}

// если начал писать все типы через I придерживайся такого стиля
// впринципе без разницы как, все зависит от команды
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
