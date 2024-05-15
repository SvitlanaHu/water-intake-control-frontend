/* eslint-disable react/prop-types */

import css from './CalendarItem.module.css';

const CalendarItem = ({ data }) => {
  return (
    <button type="button" className={css.btn}>
      <p className={(css.backGround, css.day)}>{data.id}</p>
      <p className={css.water}>{data.water}</p>
    </button>
  );
};
export default CalendarItem;
