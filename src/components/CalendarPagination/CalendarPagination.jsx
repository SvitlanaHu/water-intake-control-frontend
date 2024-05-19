import css from './CalendarPagination.module.css';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { previousMonth, nextMonth } from '../../redux/calendarSlice';
import { getMonthlyWater } from '../../redux/Water/operations';
import { useEffect } from 'react';

const CalendarPagination = () => {
  const dispatch = useDispatch();
  const { currentMonth, currentYear } = useSelector(state => state.calendar);

  useEffect(() => {
    dispatch(getMonthlyWater({ year: currentYear, month: currentMonth + 1 }));
  }, [dispatch, currentMonth, currentYear]);

  const handlePreviousMonth = () => {
    dispatch(previousMonth());
  };

  const handleNextMonth = () => {
    dispatch(nextMonth());
  };

  const monthName = dayjs().month(currentMonth).format('MMMM');

  return (
    <div className={css.paginationBlock}>
      <button className={css.btn} type="button" onClick={handlePreviousMonth}>
        <svg className={css.svg}>
          <use
            className={css.icon}
            href="../../../symbol.svg#icon-chevron-left"
          ></use>
        </svg>
      </button>
      <p className={css.text}>
        {monthName}, {currentYear}
      </p>
      <button className={css.btn} type="button" onClick={handleNextMonth}>
        <svg className={css.svg}>
          <use
            className={css.icon}
            href="../../../symbol.svg#icon-chevron-right"
          ></use>
        </svg>
      </button>
    </div>
  );
};
export default CalendarPagination;
