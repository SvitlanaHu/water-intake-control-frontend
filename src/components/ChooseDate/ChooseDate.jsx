import { useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
import dayjs from 'dayjs';

const ChooseDate = () => {
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const currentDate = dayjs().format('YYYY-MM-DD');

  const formattedDate = dayjs(selectedDate).format('D, MMMM');
  const isToday = selectedDate === currentDate;

  return <p className={css.text}>{isToday ? 'Today' : formattedDate}</p>;
};

export default ChooseDate;
