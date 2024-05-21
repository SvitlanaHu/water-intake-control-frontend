/* eslint-disable react/prop-types */
import css from './CalendarItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { dailyWater } from '../../redux/Water/operations';
import { selectDate } from '../../redux/calendarSlice';
import { selectUser } from '../../redux/auth/selectors';
import dayjs from 'dayjs';

const CalendarItem = ({ data }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const dailyNorma = user?.dailyWaterIntake || 1;

  const { currentMonth, currentYear, selectedDate } = useSelector(
    state => state.calendar
  );
  const date = dayjs(`${currentYear}-${currentMonth + 1}-${data.day}`).format(
    'YYYY-MM-DD'
  );

  const handleClick = () => {
    //  const date = dayjs(`${currentYear}-${currentMonth + 1}-${data.day}`).format(
    //    'YYYY-MM-DD'
    //  );
    dispatch(selectDate(date));
    dispatch(dailyWater(date));
  };
  const isSelected = selectedDate === date;

  const waterPercentage = ((data.volume / dailyNorma) * 100).toFixed(0);
  const isIncompleteWater = waterPercentage < 100;

  return (
    <button type="button" className={css.btn} onClick={handleClick}>
      <p
        className={`${css.day} ${isSelected ? css.selected : ''} ${
          isIncompleteWater ? css.incomplete : ''
        }`}
      >
        {data.day}
      </p>
      <p className={css.water}>{data ? `${waterPercentage}%` : '0%'}</p>
      {/* <p className={css.water}>0%</p> */}
    </button>
  );
};

export default CalendarItem;
