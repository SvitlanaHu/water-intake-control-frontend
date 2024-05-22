import { useState, useEffect } from 'react';
import styles from './AdvantagesSection.module.css';
import axios from 'axios';

const AdvantagesSection = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Функція для отримання даних з backend-а
    const fetchTotalUsers = async () => {
      try {
        // Виклик функції для отримання загальної кількості користувачів
        const response = await axios.get(
          'https://water-intake-control-backend.onrender.com/api/users/total'
        );
        const { totalUsers } = response.data;

        setTotalUsers(totalUsers);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    // Виклик функції для отримання даних після завантаження компонента
    fetchTotalUsers();
  }, []);

  return (
    <div className={styles.advantagesSection}>
      <div className={styles.advantages}>
        <div className={styles.customersBox}>
          <div className={styles.customersContainer}>
            <img
              className={styles.customersImg}
              src="/images/Male3.png"
              alt="Male3"
            />
            <img
              className={styles.customersImg2}
              src="/images/Male2.png"
              alt="Male2"
            />
            <img
              className={styles.customersImg3}
              src="/images/Male1.png"
              alt="Male1"
            />
            <p className={styles.customers}>
              Our{' '}
              <span className={styles.customersHappy}>
                {totalUsers ?? 0} happy
              </span>{' '}
              customers
            </p>
          </div>
        </div>

        <div className={styles.advantageBox}>
          <div className={styles.advantageContainer}>
            <div className={`${styles.base} ${styles.drive}`}>
              <p className={styles.advantageFlex}>
                <span className={styles.customersO}></span>Habit drive
              </p>
            </div>

            <p className={`${styles.statistics} ${styles.base}`}>
              View statistics
            </p>
            <p className={`${styles.base} ${styles.setting}`}>
              Personal rate setting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvantagesSection;
