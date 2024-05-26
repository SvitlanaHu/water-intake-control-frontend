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
  const isLoading = useSelector(selectDailyLoading);

  useEffect(() => {
    const currentDate = dayjs().format('YYYY-MM-DD');
    dispatch(dailyWater(currentDate));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={css.loaderContainer}>
        <Stack justifyContent="center" alignItems="center" height="100%">
          <CircularProgress sx={{ color: 'var(--mint)' }} />
        </Stack>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedWater = [...water].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  if (sortedWater.length === 0) {
    return (
      <div className={css.noRecordsMessage}>
        No water consumption records found for today.
      </div>
    );
  }
  return (
    <ul className={css.waterList}>
      {sortedWater.map(data => (
        <WaterItem key={data.id} data={data} />
      ))}
    </ul>
  );
};
export default WaterList;
