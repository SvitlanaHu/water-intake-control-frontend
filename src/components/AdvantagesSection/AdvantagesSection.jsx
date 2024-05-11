import styles from "./AdvantagesSection.module.css";

const AdvantagesSection = () => {
  return (
    <div className={styles.advantagesSection}>
      <div className={styles.advantages}>
        <div className={styles.customersBox}>
          <p className={styles.customers}>Our <span className={styles.customersHappy}>happy</span> customers</p>
        </div>
        <div className={styles.advantageBox}>
          <p className={`${styles.base} ${styles.drive}`}>Habit drive</p>
          <p className={`${styles.statistics} ${styles.base}`}>View statistics</p>        
          <p className={`${styles.base} ${styles.setting}`}>Personal rate setting</p>
        </div>
      </div>
    </div>
  );
};
export default AdvantagesSection;