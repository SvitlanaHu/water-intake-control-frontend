import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import styles from "./SignUpForm.module.css";
import { NavLink } from "react-router-dom";
import AuthBtn from "../AuthBtn/AuthBtn";
import DefaultForm from "../DefautForm/DefautForm";

export default function SignUpForm() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Dispatch registration action or perform form submission logic here

    form.reset();
    setConfirmPassword("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <DefaultForm handleChangePassword={handleChangePassword} />
      <label className={styles.label}>
        Repeat password
        <div className={styles.passwordWrap}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Repeat password"
            autoComplete="new-password"
            required
            className={styles.input}
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
          <div className={styles.showPasswordBtnContainer}>
            <button
              type="button"
              className={styles.showPasswordBtn}
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? <IoEyeOffSharp /> : <IoIosEye />}
            </button>
          </div>
        </div>
      </label>
      <AuthBtn>Sign Up</AuthBtn>
      <NavLink className={styles.link} to="/signin">
        Already have account? Sign in
      </NavLink>
    </form>
  );
}
