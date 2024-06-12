import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Logo from '../../components/Logo/Logo';
import styles from '../AuthPages/AuthPages.module.css';
import AuthBtn from '../../components/AuthBtn/AuthBtn';
import { resetPassword, submitNewPassword } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { selectIsLoading } from '../../redux/auth/selectors';

// Валідаційна схема Yup для електронної пошти
const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is a required field'),
});

// Валідаційна схема Yup для нового паролю
const passwordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New password is a required field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is a required field'),
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  let query = useQuery();
  const token = query.get('token');

  useEffect(() => {
    const validatePasswordFields = async () => {
      try {
        await passwordSchema.validate(
          { newPassword, confirmPassword },
          { abortEarly: false }
        );
        setErrors({});
      } catch (validationErrors) {
        const errors = {};
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      }
    };

    if (newPassword || confirmPassword) {
      validatePasswordFields();
    }
  }, [newPassword, confirmPassword]);

  const handleEmailChange = async e => {
    const { value } = e.target;
    setEmail(value);

    try {
      await emailSchema.validate({ email: value }, { abortEarly: false });
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, email: error.message }));
    }
  };

  const handlePasswordChange = e => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmitEmail = async e => {
    e.preventDefault();

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

    dispatch(resetPassword(email))
      .unwrap()
      .then(() => {
        toast.success(
          'Password reset instructions have been sent to your email. Please check your inbox.',
          { duration: 10000 }
        );
        setEmail('');
      })
      .catch(error => {
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

  const handleSubmitNewPassword = async e => {
    e.preventDefault();

    try {
      await passwordSchema.validate(
        { newPassword, confirmPassword },
        { abortEarly: false }
      );
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      return;
    }

    dispatch(submitNewPassword({ token, newPassword }))
      .unwrap()
      .then(() => {
        toast.success('Password has been reset successfully', {
          duration: 7000,
        });
        navigate('/confirm-email');
      })
      .catch(() => {
        toast.error('Failed to reset password. Please try again.', {
          duration: 7000,
        });
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

        {token ? (
          <form onSubmit={handleSubmitNewPassword}>
            <div className={styles.labelResetWrap}>
              <label className={styles.label}>
                <span className={styles.labelText}>New Password</span>
                <div className={styles.passwordWrap}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={handlePasswordChange}
                    className={`${styles.input} ${
                      errors.newPassword && styles.inputError
                    }`}
                  />
                  <button
                    type="button"
                    className={styles.showPasswordBtn}
                    onClick={handleToggleNewPassword}
                  >
                    {showNewPassword ? <FiEye /> : <FiEyeOff />}
                  </button>
                </div>
                {errors.newPassword && (
                  <span className={styles.error}>{errors.newPassword}</span>
                )}
              </label>
            </div>
            <div className={styles.labelResetWrap}>
              <label className={styles.label}>
                <span className={styles.labelText}>Confirm New Password</span>
                <div className={styles.passwordWrap}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={handlePasswordChange}
                    className={`${styles.input} ${
                      errors.confirmPassword && styles.inputError
                    }`}
                  />
                  <button
                    type="button"
                    className={styles.showPasswordBtn}
                    onClick={handleToggleConfirmPassword}
                  >
                    {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className={styles.error}>{errors.confirmPassword}</span>
                )}
              </label>
            </div>
            <AuthBtn type="submit" disabled={isLoading}>
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </AuthBtn>
          </form>
        ) : (
          <form onSubmit={handleSubmitEmail}>
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
        )}

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
