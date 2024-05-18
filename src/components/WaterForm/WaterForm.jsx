import styles from './WaterForm.module.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SaveButton } from '../SaveButton/SaveButton';

const schema = yup
  .object({
    waterAmount: yup
      .number()
      .required('Amount of water is required')
      .min(0, 'Minimum is 0ml')
      .max(3000, 'Maximum is 3000ml'),
    time: yup.string().required('Time is required'),
  })
  .required();

const WaterForm = ({ operationType }) => {
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
      waterAmount: 50,
      time: new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
  });

  const waterAmount = watch('waterAmount');

  useEffect(() => {
    setValue('waterAmount', waterAmount);
  }, [waterAmount, setValue]);

  const incrementWaterAmount = () => {
    setValue('waterAmount', Math.min(Number(waterAmount) + 50, 3000));
  };
  const decrementWaterAmount = () => {
    setValue('waterAmount', Math.max(Number(waterAmount) - 50, 0));
  };

  const handleWaterAmountChange = e => {
    const { value } = e.target;
    if (!isNaN(value) && value >= 0) {
      setValue('waterAmount', Number(value));
    }
  };

  const onSubmit = data => {
    console.log(data);
    // логіка для відправки даних на сервер
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
          >
            {/* <span className={styles.spanIcon}>-</span> */}
          </button>
          <div className={styles.waterAmountBox}>
            <input
              className={styles.waterAmount}
              type="number"
              value={waterAmount}
              onChange={handleWaterAmountChange}
              min="0"
              max="3000"
              {...register('waterAmount')}
              // readOnly
            />
            <span className={styles.spanAmount}>{waterAmount} ml</span>
          </div>
          <buttonn
            className={styles.incrementButton}
            type="button"
            onClick={incrementWaterAmount}
          >
            <span>+</span>
          </buttonn>
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
          onChange={e => setValue('waterAmount', e.target.value)}
          min="0"
          max="3000"
        />
      </div>
      <div className={styles.btnBox}>
        <SaveButton enabled={isValid} />
      </div>
    </form>
  );
};

export default WaterForm;
