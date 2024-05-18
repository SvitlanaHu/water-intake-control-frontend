import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import AuthBtn from '../AuthBtn/AuthBtn';
import DefaultForm from '../DefautForm/DefautForm';
import styles from './SignUpForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom/dist';

export default function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangeConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        form.reset();
        setConfirmPassword('');
        toast.success('Registration success');
        navigate('/confirm-email');
      })
      .catch(error => {
        console.log('status', error === 'Request failed with status code 409');
        if (error === 'Request failed with status code 409') {
          toast.error('This email is already in use');
        } else {
          toast.error('Oops, something went wrong :c Try again!');
        }
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.formInputs}>
        <DefaultForm handleChangePassword={handleChangePassword} />
        <label className={styles.label}>
          Repeat password
          <div className={styles.passwordWrap}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
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
                {showConfirmPassword ? (
                  <FiEye className={styles.svg} />
                ) : (
                  <FiEyeOff className={styles.svg} />
                )}
              </button>
            </div>
          </div>
        </label>
      </div>
      <AuthBtn>Sign Up</AuthBtn>
      <NavLink to="/signin">
        <p className={styles.wrapDesc}>
          <span className={styles.linkQuestion}>Already have an account?</span>
          <span className={styles.linkRedirect}> Sign in</span>
        </p>
      </NavLink>
    </form>
  );
}
