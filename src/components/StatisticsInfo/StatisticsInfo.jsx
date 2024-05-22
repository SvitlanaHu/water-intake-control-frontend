import styles from "./StatisticsInfo.module.css";
import { Link } from 'react-router-dom';
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Statistics from "../Statistics/Statistics";

const StatisticsInfo = () => {
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
                  href="../../../symbol.svg#icon-pie-chart-02"
                ></use>
              </svg>
            </Link>    
        </div>
        
      </div>
      <Statistics />
    </div>
  );
};
export default StatisticsInfo;
