import css from './WaterDailyNorma.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);

  const formatVolume = volume => {
    if (volume > 1000) {
      return `${(volume / 1000).toFixed(1)} L`;
    }
    return `${volume} ml`;
  };

  return (
    <div className={css.dailyNorm}>
      <a className={css.title}>{formatVolume(user.dailyWaterIntake)}</a>
      <a className={css.desc}>My daily norma</a>
    </div>
  );
};
export default WaterDailyNorma;
