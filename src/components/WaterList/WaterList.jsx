import { useEffect } from 'react';
import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectDailyWater, selectError } from '../../redux/Water/selector';
import { dailyWater } from '../../redux/Water/operations';
import dayjs from 'dayjs';

const WaterList = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectDailyWater);

  //   const isLoading = useSelector(selectIsLoading);
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  useEffect(() => {
    const currentDate = dayjs().format('YYYY-MM-DD');
    dispatch(dailyWater(currentDate));
  }, [dispatch]);

  const error = useSelector(selectError);
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
