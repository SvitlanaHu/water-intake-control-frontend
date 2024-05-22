/* eslint-disable react/prop-types */
import styles from './DeleteWaterModal.module.css';
import { Modal } from '../Modal/Modal';
import {
  deleteWater,
  dailyWater,
  todayWater,
  getMonthlyWater,
} from '../../redux/Water/operations';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const DeleteWaterModal = ({ isModalOpen, setIsModalOpen, id }) => {
  const dispatch = useDispatch();
  const { selectedDate, currentMonth, currentYear } = useSelector(
    state => state.calendar
  );

  const handleDelete = () => {
    const date = dayjs().format('YYYY-MM-DD');
    dispatch(deleteWater(id)).then(() => {
      dispatch(dailyWater(selectedDate));
      dispatch(todayWater(date));
      dispatch(getMonthlyWater({ year: currentYear, month: currentMonth + 1 }));
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
          <div className={styles.form}>
            <div className={styles.infoBox}>
              <h2 className={styles.formTitle}>Delete entry</h2>
              <p className={styles.text}>
                Are you sure you want to delete the entry?
              </p>
            </div>
            <div className={styles.btnBox}>
              <button
                className={styles.deleteBtn}
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteWaterModal;
