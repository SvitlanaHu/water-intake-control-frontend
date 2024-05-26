import css from './Calendar.module.css';
import CalendarItem from '../CalendarItem/CalendarItem';
import { useSelector } from 'react-redux';
import {
  selectWater,
  selectMonthLoading,
  selectError,
} from '../../redux/Water/selector';
import dayjs from 'dayjs';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const Calendar = () => {
  const items = useSelector(selectWater);
  const isLoading = useSelector(selectMonthLoading);
  const error = useSelector(selectError);
  const { currentMonth, currentYear } = useSelector(state => state.calendar);

  if (isLoading) {
    return (
      <div className={css.loaderContainer}>
        <Stack justifyContent="center" alignItems="center" height="100%">
          <CircularProgress sx={{ color: 'var(--static-mint)' }} />
        </Stack>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const daysInMonth = dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth();
  const waterRecordsByDay = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    volume: 0,
  }));

  items.forEach(item => {
    const day = dayjs(item.date).date() - 1;
    waterRecordsByDay[day].volume += item.volume;
  });

  return (
    <div className={css.calendarBlock}>
      {waterRecordsByDay.map((data, index) => (
        <CalendarItem key={index} data={data} day={index + 1} />
      ))}
    </div>
  );
};

export default Calendar;
