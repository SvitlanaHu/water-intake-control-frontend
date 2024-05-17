/* eslint-disable react/prop-types */
import css from './CalendarItem.module.css';

const CalendarItem = ({ data, day }) => {
  return (
    <button type="button" className={css.btn}>
      <p className={css.day}>{day}</p>
      <p className={css.water}>{data ? data.volume : '0'}%</p>
      {/* <p className={css.water}>0%</p> */}
    </button>
  );
};

export default CalendarItem;
