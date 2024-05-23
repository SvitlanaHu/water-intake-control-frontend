import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterStatisticsInfo from '../../components/WaterStatisticsInfo/WaterStatisticsInfo';
import styles from './StatisticsPage.module.css';

const StatisticsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.waterMainInfo}>
        <WaterMainInfo />
      </div>
      <WaterStatisticsInfo />
    </div>
  );
};
export default StatisticsPage;
