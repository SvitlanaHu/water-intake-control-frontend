import styles from './StatisticsInfo.module.css';
import { Link } from 'react-router-dom';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import Statistics from '../Statistics/Statistics';
import svgIcon from '../../../public/symbol.svg';

const MonthInfo = () => {
  return (
    <div className={styles.MonthBlock}>
      <div className={styles.paginationBar}>
        <h1 className={styles.header}>Statistics</h1>
        <div className={styles.box}>
          <CalendarPagination />
          <Link to="/tracker">
            <svg className={styles.svg}>
              <use
                className={styles.settingsIcon}
                href={`${svgIcon}#icon-pie-chart-02`}
              ></use>
            </svg>
          </Link>
        </div>
      </div>
      <Statistics />
    </div>
  );
};

export default MonthInfo;
