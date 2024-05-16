import css from './Calendar.module.css';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useSelector } from 'react-redux';
import {
  selectWater,
  selectIsLoading,
  selectError,
} from '../../redux/Water/selector';

const Calendar = () => {
  const items = useSelector(selectWater);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(items);
  return (
    <div className={css.calendarBlock}>
      {items.map(data => (
        <CalendarItem key={data.id} data={data} />
      ))}
    </div>
  );
};
export default Calendar;
