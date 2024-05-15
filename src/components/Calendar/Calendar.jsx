import css from './Calendar.module.css';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useSelector } from 'react-redux';

const Calendar = () => {
  const { items, isLoading, error } = useSelector(state => state.water);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={css.calendarBlock}>
      {items.map(data => (
        <CalendarItem key={data.id} data={data} />
      ))}
    </div>
  );
};
export default Calendar;
