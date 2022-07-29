enum type {
  digits = 'digits',
  operator = 'operator',
  special = 'special',
}

interface IButtons {
  id: number;
  value: string;
  type: type;
}

interface IPropsButton {
  id: number;
  type: string;
  value: string;
}

export type { IButtons, IPropsButton };
export { type };
