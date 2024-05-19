import css from './WaterDailyNorma.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);
  const dailyNorma = user.dailyWaterIntake === 0 ? 1.5 : user.dailyWaterIntake;

  return (
    <div className={css.dailyNorm}>
      <a className={css.title}>{dailyNorma} L</a>
      <a className={css.desc}>My daily norma</a>
    </div>
  );
};
export default WaterDailyNorma;
