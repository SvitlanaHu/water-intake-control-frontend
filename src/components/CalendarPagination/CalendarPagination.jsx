import css from "./CalendarPagination.module.css";

const CalendarPagination = () => {
  const month = "April";
  const year = "2024";

  return (
    <div className={css.paginationBlock}>
      <button className={css.btn} type="button">
        <svg className={css.svg}>
          <use
            className={css.icon}
            href="../../../public/symbol.svg#icon-chevron-left"
          ></use>
        </svg>
      </button>
      <p className={css.text}>
        {month},{year}
      </p>
      <button className={css.btn} type="button">
        <svg className={css.svg}>
          <use
            className={css.icon}
            href="../../../public/symbol.svg#icon-chevron-right"
          ></use>
        </svg>
      </button>
    </div>
  );
};
export default CalendarPagination;
