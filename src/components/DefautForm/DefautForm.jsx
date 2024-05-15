import { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";

import styles from "./DefautForm.module.css";

const DefaultForm = ({ handleChangePassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formWrap}>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password
        <div className={styles.passwordWrap}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            autoComplete="password"
            required
            className={styles.input}
            pattern=".{6,}"
            title="Password must be at least 6 characters long"
            onChange={handleChangePassword} // Використовуємо передану функцію
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
      </label>
    </div>
  );
};

DefaultForm.propTypes = {
  handleChangePassword: PropTypes.func, // Перевірка типу властивості handleChangePassword
};

export default DefaultForm;
