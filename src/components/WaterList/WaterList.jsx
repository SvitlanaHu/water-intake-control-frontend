import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
import { useSelector } from 'react-redux';
import {
  selectDailyWater,
  selectIsLoading,
  selectError,
} from '../../redux/Water/selector';

const WaterList = () => {
  const water = useSelector(selectDailyWater);

  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <ul className={css.waterList}>
      {water.map(data => (
        <WaterItem key={data.id} data={data} />
      ))}
    </ul>
  );
};
export default WaterList;
