import css from "./MonthInfo.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";

const MonthInfo = () => {
  return (
    <div className={css.MonthBlock}>
      <div className={css.paginationBar}>
        <h1 className={css.header}>Month</h1>
        <CalendarPagination />
      </div>
      <Calendar />
    </div>
  );
};
export default MonthInfo;
