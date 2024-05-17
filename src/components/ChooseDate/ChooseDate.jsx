import { useSelector } from 'react-redux';
import css from './ChooseDate.module.css';

const ChooseDate = () => {
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  return <p className={css.text}>{selectedDate}</p>;
};

export default ChooseDate;
