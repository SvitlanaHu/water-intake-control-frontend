import css from './Calendar.module.css';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useSelector } from 'react-redux';
import {
  selectWater,
  selectIsLoading,
  selectError,
} from '../../redux/Water/selector';
import dayjs from 'dayjs';

const Calendar = () => {
  const items = useSelector(selectWater);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { currentMonth, currentYear } = useSelector(state => state.calendar);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const daysInMonth = dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth();
  const waterRecordsByDay = Array(daysInMonth).fill(null);

  items.forEach(item => {
    const day = dayjs(item.date).date() - 1;
    waterRecordsByDay[day] = item;
  });

  console.log(waterRecordsByDay);
  return (
    <div className={css.calendarBlock}>
      {waterRecordsByDay.map((data, index) => (
        <CalendarItem key={index} data={data} day={index + 1} />
      ))}
    </div>
  );
};

export default Calendar;
