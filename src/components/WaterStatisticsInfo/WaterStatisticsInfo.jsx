import styles from './WaterStatisticsInfo.module.css';
import UserPanel from '../UserPanel/UserPanel';
import DailyInfo from '../DailyInfo/DailyInfo';
import StatisticsInfo from '../StatisticsInfo/StatisticsInfo';

const WaterDetailedInfo = () => {
  return (
    <div className={styles.container}>
      <UserPanel />
      <DailyInfo />
      <StatisticsInfo />
    </div>
  );
};
export default WaterDetailedInfo;
