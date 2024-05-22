import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import img from '../../../public/images/404notFound.png';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5); // Початкове значення таймера
  const isLogedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setSecondsLeft(prevSeconds => prevSeconds - 1);
    }, 1000);

    if (isLogedIn) {
      // Перенаправляємо користувача на головну сторінку після 5 секунд
      timeout = setTimeout(() => {
        navigate('/tracker');
      }, 5000);
    } else {
      // Перенаправляємо користувача на сторінку входу після 5 секунд
      timeout = setTimeout(() => {
        navigate('/signin');
      }, 5000);
    }

    // При знищенні компонента очищаємо таймери
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLogedIn, navigate]);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Oops! It seems like the page you are looking for does not exist.
      </h2>
      <div className={styles.textWrap}>
        <p className={styles.text}>
          Redirecting to
          {isLogedIn ? ' tracker' : ' home'} page in
        </p>
        <p className={styles.seconds}>{secondsLeft}</p>
        <p className={styles.text}>seconds...</p>
      </div>
      <img src={img} className={styles.img} alt="404 page img" />
    </div>
  );
}
