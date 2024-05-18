import { useEffect } from 'react';
import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectDailyWater,
  selectError,
  selectDailyLoading,
} from '../../redux/Water/selector';
import { dailyWater } from '../../redux/Water/operations';
import dayjs from 'dayjs';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const WaterList = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectDailyWater);
  const error = useSelector(selectError);

  useEffect(() => {
    const currentDate = dayjs().format('YYYY-MM-DD');
    dispatch(dailyWater(currentDate));
  }, [dispatch, water]);

  const isLoading = useSelector(selectDailyLoading);
  if (isLoading) {
    return (
      <div className={css.loaderContainer}>
        <Stack justifyContent="center" alignItems="center" height="100%">
          <CircularProgress sx={{ color: '#9BE1A0' }} />
        </Stack>
      </div>
    );
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
