import { useSelector } from 'react-redux';

import css from './ChooseDate.module.css';
import dayjs from 'dayjs';

const ChooseDate = () => {
  const { selectedDate, currentMonth, currentYear } = useSelector(
    state => state.calendar
  );
  const currentDate = dayjs().format('YYYY-MM-DD');
  const selectedDateObj = dayjs(selectedDate);

  const formattedDate = selectedDateObj.format('D, MMMM');
  const isToday = selectedDate === currentDate;

  const isCurrentMonthYear =
    selectedDateObj.month() === currentMonth &&
    selectedDateObj.year() === currentYear;

  return (
    <p className={css.text}>
      {isToday && isCurrentMonthYear ? 'Today' : formattedDate}
    </p>
  );
};

export default ChooseDate;
