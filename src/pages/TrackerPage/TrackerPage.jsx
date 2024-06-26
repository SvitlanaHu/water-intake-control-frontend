import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './TrackerPage.module.css';
const TrackerPage = () => {
  return (
    <div className={css.trackerContainer}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};
export default TrackerPage;
