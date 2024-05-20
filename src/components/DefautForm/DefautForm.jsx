import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './DefautForm.module.css';

const DefaultForm = ({ formValues, errors, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formWrap}>
      <label className={styles.label}>
        Email
        <input
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          value={formValues.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email && styles.inputError}`}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </label>
      <label className={styles.label}>
        Password
        <div className={styles.passwordWrap}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            autoComplete="password"
            value={formValues.password}
            onChange={handleChange}
            className={`${styles.input} ${
              errors.password && styles.inputError
            }`}
          />
          <div className={styles.showPasswordBtnContainer}>
            <button
              type="button"
              className={styles.showPasswordBtn}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <FiEye className={styles.svg} />
              ) : (
                <FiEyeOff className={styles.svg} />
              )}
            </button>
          </div>
        </div>
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
      </label>
    </div>
  );
};

DefaultForm.propTypes = {
  formValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DefaultForm;
