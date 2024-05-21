import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './StatisticsPage.module.css';
const StatisticsPage = () => {
  return (
    <div className={css.trackerContainer}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};
export default StatisticsPage; 