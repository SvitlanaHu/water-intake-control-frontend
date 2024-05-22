import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import styles from './StatisticsPage.module.css';
const StatisticsPage = () => {
  return (
    <div className={styles.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};
export default StatisticsPage; 