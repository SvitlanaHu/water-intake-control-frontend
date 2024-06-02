import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Logo from '../../components/Logo/Logo';
import styles from '../AuthPages/AuthPages.module.css';
import AuthBtn from '../../components/AuthBtn/AuthBtn';
import { resetPassword } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { selectIsLoading } from '../../redux/auth/selectors';

// Валідаційна схема Yup для електронної пошти
const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is a required field'),
});

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleEmailChange = async e => {
    const { value } = e.target;
    setEmail(value);

    // Виконуємо валідацію для конкретного поля
    try {
      await emailSchema.validate({ email: value }, { abortEarly: false });
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, email: error.message }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Виконуємо валідацію форми перед відправленням
    try {
      await emailSchema.validate({ email }, { abortEarly: false });
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      return;
    }

    // Відправляємо запит на скидання пароля
    dispatch(resetPassword(email))
      .unwrap()
      .then(() => {
        // Відображаємо повідомлення про успіх
        toast.success(
          'Password reset instructions have been sent to your email. Please check your inbox.',
          { duration: 10000 }
        );
        // Очищаємо поле електронної пошти після відправлення
        setEmail('');
      })
      .catch(error => {
        // Обробляємо помилку
        if (
          error === 'Request failed with status code 404' ||
          error === 'Request failed with status code 400'
        ) {
          toast.error(
            'User not found. Please check the email you provided and try again.',
            { duration: 7000 }
          );
        } else {
          toast.error('Oops, something went wrong :c Try again!', {
            duration: 7000,
          });
        }
      });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Logo text="AquaTrack" />
        </div>
        <div className={styles.titleWrap}>
          <DocumentTitle>Password reset</DocumentTitle>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.labelResetWrap}>
            <label className={styles.label}>
              <span className={styles.labelText}>
                You will receive instructions for resetting your password
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                className={`${styles.input} ${
                  errors.email && styles.inputError
                }`}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </label>
          </div>
          <AuthBtn type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </AuthBtn>
        </form>
        <NavLink to="/signin" className={styles.returnToSignIn}>
          <p className={styles.wrapDesc}> Return to SIGN IN</p>
        </NavLink>
        <div className={styles.wrapWaterSection}>
          <AdvantagesSection />
        </div>
      </div>
    </div>
  );
}
