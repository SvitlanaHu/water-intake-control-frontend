import styles from "./AdvantagesSection.module.css";

const AdvantagesSection = () => {
  return (
    <div className={styles.advantagesSection}>
      <div className={styles.advantages}>
        <div className={styles.customersBox}>
          <div className={styles.customersContainer}>
            <img className={styles.customersImg} src="/public/images/Male3.png" alt="Male3" />
            <img className={styles.customersImg2} src="/public/images/Male2.png" alt="Male2" />
            <img className={styles.customersImg3} src="/public/images/Male1.png" alt="Male1" />
            <p className={styles.customers}>Our <span className={styles.customersHappy}>happy</span> customers</p>
          </div>
          
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