import styles from './MonthInfo.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/Water/selector';

const MonthInfo = () => {
  const error = useSelector(selectError);
  const navigate = useNavigate();

  if (error === 'Request failed with status code 401') {
    setTimeout(() => {
      window.location.reload();
    }, 100);
    navigate('/signin');
  }

  return (
    <div className={styles.MonthBlock}>
      <div className={styles.paginationBar}>
        <h1 className={styles.header}>Month</h1>
        <div className={styles.box}>
          <CalendarPagination />
          <Link to="/statistics">
            <svg className={styles.svg}>
              <use
                className={styles.settingsIcon}
                href="../../../symbol.svg#icon-pie-chart-02"
              ></use>
            </svg>
          </Link>
        </div>
      </div>
      <Calendar />
    </div>
  );
};
export default MonthInfo;
