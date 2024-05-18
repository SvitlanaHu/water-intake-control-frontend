/* eslint-disable react/prop-types */
import css from './CalendarItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { dailyWater } from '../../redux/Water/operations';
import { selectDate } from '../../redux/calendarSlice';
import dayjs from 'dayjs';

const CalendarItem = ({ data }) => {
  const dispatch = useDispatch();
  const { currentMonth, currentYear } = useSelector(state => state.calendar);

  const handleClick = () => {
    const date = dayjs(`${currentYear}-${currentMonth + 1}-${data.day}`).format(
      'YYYY-MM-DD'
    );
    dispatch(selectDate(date));
    dispatch(dailyWater(date));
  };

  return (
    <button type="button" className={css.btn} onClick={handleClick}>
      <p className={css.day}>{data.day}</p>
      <p className={css.water}>{data ? data.volume : '0'}%</p>
      {/* <p className={css.water}>0%</p> */}
    </button>
  );
};

export default CalendarItem;
