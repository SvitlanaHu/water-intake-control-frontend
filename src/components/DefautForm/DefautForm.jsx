import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import styles from "./DefautForm.module.css";

const DefaultForm = ({ handleChangePassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
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
              {showPassword ? <IoEyeOffSharp /> : <IoIosEye />}
            </button>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DefaultForm;
