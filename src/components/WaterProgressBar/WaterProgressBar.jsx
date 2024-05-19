import { useEffect } from 'react';
import css from './WaterProgressBar.module.css';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { todayWater } from '../../redux/Water/operations';
import dayjs from 'dayjs';
import { selectTodayWater } from '../../redux/Water/selector';

const WaterProgressBar = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectTodayWater);
  const user = useSelector(selectUser);
  const dailyNorma =
    user.dailyWaterIntake === 0 ? 1500 : user.dailyWaterIntake * 1000;

  useEffect(() => {
    const currentDate = dayjs().format('YYYY-MM-DD');
    dispatch(todayWater(currentDate));
  }, [dispatch]);

  const totalConsumed = water.reduce(
    (total, record) => total + record.volume,
    0
  );

  const consumedPercentage = +((totalConsumed / dailyNorma) * 100).toFixed(0);

  return (
    <div className={css.progressCont}>
      <div className={css.textCont}>
        <strong className={css.title}>Today</strong>
        <Slider
          className={css.slider}
          value={consumedPercentage}
          sx={{
            m: 0,
            p: 0,
            color: '#9be1a0',
            '& .MuiSlider-thumb': {
              borderRadius: '16px',
              width: '12px',
              height: '12px',
              color: 'white',
              border: '1px solid #9be1a0',
            },
            '& .MuiSlider-rail': {
              color: '#F0EFF4',
              backgroundColor: '#F0EFF4',
            },
          }}
        />
        <div className={css.percentBar}>
          <a>0%</a>
          <a>50%</a>
          <a>100%</a>
        </div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
