import type { IButtons } from 'types';
import { type } from 'types';

const buttons: IButtons[] = [
  { id: 1, value: 'ac', type: type.special },
  { id: 2, value: '<', type: type.special },
  { id: 3, value: '/', type: type.operator },
  { id: 4, value: 'x', type: type.operator },
  { id: 5, value: '7', type: type.digits },
  { id: 6, value: '8', type: type.digits },
  { id: 7, value: '9', type: type.digits },
  { id: 8, value: '-', type: type.operator },
  { id: 9, value: '4', type: type.digits },
  { id: 10, value: '5', type: type.digits },
  { id: 11, value: '6', type: type.digits },
  { id: 12, value: '+', type: type.operator },
  { id: 13, value: '1', type: type.digits },
  { id: 14, value: '2', type: type.digits },
  { id: 15, value: '3', type: type.digits },
  { id: 16, value: '=', type: type.operator },
  { id: 17, value: '0', type: type.digits },
  { id: 18, value: '.', type: type.special },
];

export { buttons };
