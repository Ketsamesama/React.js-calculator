import { useAppSelector } from 'hooks';

const DisplayValue = () => {
  const dispayValue = useAppSelector((state) => state.display.value);
  return dispayValue;
};

const HistoryValue = () => {
  const historyValue = useAppSelector((state) => state.display.history);
  return historyValue;
};

export { DisplayValue, HistoryValue };
