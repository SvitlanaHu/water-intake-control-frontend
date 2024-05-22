/* eslint-disable react/prop-types */
import styles from './WaterForm.module.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SaveButton } from '../SaveButton/SaveButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  addWater,
  dailyWater,
  todayWater,
  updateWater,
} from '../../redux/Water/operations';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const schema = yup.object().shape({
  waterAmount: yup
    .number()
    .required('Amount of water is required')
    .positive('Water amount must be positive')
    .integer('Water amount must be an integer')
    .max(3000, 'Maximum is 3000ml'),
  time: yup
    .string()
    .required('Time is required')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)'),
});

const WaterForm = ({ operationType, closeModal, id, waterData }) => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(state => state.calendar);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      waterAmount: operationType === 'edit' ? waterData.volume : 50,
      time:
        operationType === 'edit'
          ? dayjs(waterData.date).format('HH:mm')
          : new Date().toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
            }),
    },
  });

  const waterAmount = watch('waterAmount');

  useEffect(() => {
    if (waterAmount !== '') {
      setValue('waterAmount', waterAmount);
    }
  }, [waterAmount, setValue]);

  const incrementWaterAmount = () => {
    setValue('waterAmount', Math.min(Number(waterAmount) + 50, 3000));
  };

  const decrementWaterAmount = () => {
    setValue('waterAmount', Math.max(Number(waterAmount) - 50, 0));
  };

  const handleWaterAmountChange = e => {
    const { value } = e.target;
    if (value === '' || (/^\d*$/.test(value) && value >= 0)) {
      setValue('waterAmount', value === '' ? value : Number(value), {
        shouldValidate: value !== '',
      });
    }
  };

  const onSubmit = data => {
    const date = selectedDate;
    const datetime = `${date} ${data.time}`;
    const userTimezone = dayjs.tz.guess();
    const formattedDatetime = dayjs.tz(datetime, userTimezone).format();

    if (operationType === 'add') {
      dispatch(
        addWater({
          volume: Number(data.waterAmount),
          date: formattedDatetime,
          timezone: userTimezone,
        })
      ).then(() => {
        dispatch(dailyWater(date));
        dispatch(todayWater(dayjs().format('YYYY-MM-DD')));
      });
    } else if (operationType === 'edit') {
      dispatch(
        updateWater({
          waterId: id,
          water: {
            volume: Number(data.waterAmount),
            date: formattedDatetime,
            timezone: userTimezone,
          },
        })
      ).then(() => {
        dispatch(dailyWater(date));
        dispatch(todayWater(dayjs().format('YYYY-MM-DD')));
      });
    }

    closeModal();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.titleBox}>
        <h2 className={styles.formTitle}>
          {operationType === 'add'
            ? 'Add water'
            : 'Edit the entered amount of water'}
        </h2>
      </div>
      <div className={styles.divValue}>
        <h3 className={styles.textValue}>
          {operationType === 'add' ? 'Choose a value' : 'Correct entered data:'}
        </h3>
      </div>
      <div className={styles.divAmount}>
        <label className={styles.labelAmount} htmlFor="waterAmount">
          Amount of water:
        </label>
        <div className={styles.amountBox}>
          <button
            className={styles.decrementButton}
            type="button"
            onClick={decrementWaterAmount}
          ></button>
          <div className={styles.waterAmountBox}>
            <input
              className={styles.waterAmount}
              type="number"
              value={waterAmount}
              onChange={handleWaterAmountChange}
              min="0"
              max="3000"
              {...register('waterAmount')}
            />
            <span className={styles.spanAmount}>{waterAmount} ml</span>
          </div>
          <button
            className={styles.incrementButton}
            type="button"
            onClick={incrementWaterAmount}
          >
            <span className={styles.spanIcon}>+</span>
          </button>
        </div>
        {errors.waterAmount && (
          <p className={styles.error}>{errors.waterAmount.message}</p>
        )}
      </div>
      <div className={styles.timeBox}>
        <label className={styles.labelTime} htmlFor="time">
          Recording time:
        </label>
        <input className={styles.input} type="time" {...register('time')} />
        {errors.time && <p className={styles.error}>{errors.time.message}</p>}
      </div>
      <div className={styles.enterBox}>
        <label className={styles.textValue} htmlFor="water">
          Enter the value of the water used:
        </label>
        <input
          className={styles.input}
          type="number"
          value={waterAmount}
          onChange={handleWaterAmountChange}
          min="0"
          max="3000"
        />
        {errors.waterAmount && (
          <p className={styles.error}>{errors.waterAmount.message}</p>
        )}
      </div>
      <div className={styles.btnBox}>
        <SaveButton enabled={isValid} />
      </div>
    </form>
  );
};

export default WaterForm;
