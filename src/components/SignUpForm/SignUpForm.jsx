import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import AuthBtn from '../AuthBtn/AuthBtn';
import DefaultForm from '../DefautForm/DefautForm';
import styles from './SignUpForm.module.css';
import { register } from '../../redux/auth/operations';

// Валідаційна схема Yup
const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is a required field'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z\d])(?=.*[А-Яа-яІіЇї\d]).{5,}$/,
      'Must contain letters and digits, min 5 characters.'
    )
    .required('Password is a required field'),
  confirmPassword: Yup.string()
    .required('Confirm Password is a required field')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = async e => {
    const { name, value } = e.target;
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));

    try {
      if (name === 'confirmPassword') {
        await signUpSchema.validateAt(name, {
          ...formValues,
          [name]: value,
        });
      } else {
        await signUpSchema.validateAt(name, { [name]: value.toLowerCase() });
      }
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = await validateForm();

    if (!isValid) {
      toast.error('Please fix the validation errors.');
      return;
    }

    dispatch(
      register({
        email: formValues.email,
        password: formValues.password,
      })
    )
      .unwrap()
      .then(() => {
        setFormValues({ email: '', password: '' });
        toast.success('Register success');
      })
      .catch(error => {
        console.log('status', error === 'Request failed with status code 409');
        if (error === 'Request failed with status code 409') {
          toast.error('This email is already in use');
        } else if (error === 'Request failed with status code 400') {
          toast.error('Bad Request. Please provide a valid email address');
        } else {
          toast.error('Oops, something went wrong :c Try again!');
        }
      });
  };

  const validateForm = async () => {
    try {
      await signUpSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.formInputs}>
        <DefaultForm
          formValues={formValues}
          errors={errors}
          handleChange={handleChange}
          handleTogglePassword={handleToggleConfirmPassword}
        />
        <label className={styles.label}>
          Repeat password
          <div className={styles.passwordWrap}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Repeat password"
              autoComplete="new-password"
              className={`${styles.input} ${
                errors.confirmPassword && styles.inputError
              }`}
              value={formValues.confirmPassword}
              onChange={handleChange}
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
          {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
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
};

export default SignUpForm;
