import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';
import styles from './SignInForm.module.css';
import AuthBtn from '../AuthBtn/AuthBtn';
import { useNavigate } from 'react-router-dom';
import DefaultForm from '../DefautForm/DefautForm';

// Валідаційна схема Yup
const userSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is a required field'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z\d])(?=.*[А-Яа-яІіЇї\d]).{5,}$/,
      'Must contain letters and digits, min 8 characters.'
    )
    .required('Password is a required field'),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = async e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Виконуємо валідацію для конкретного поля
    try {
      await userSchema.validateAt(name, { [name]: value.toLowerCase() });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const validateForm = async () => {
    try {
      await userSchema.validate(formValues, { abortEarly: false });
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

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = await validateForm();

    if (!isValid) {
      toast.error('Please fix the validation errors.');
      return;
    }

    dispatch(
      logIn({
        email: formValues.email,
        password: formValues.password,
      })
    )
      .unwrap()
      .then(() => {
        setFormValues({ email: '', password: '' });
        toast.success('Login success');
      })
      .catch(error => {
        console.log('status', error);
        if (error === 'Request failed with status code 403') {
          navigate('/confirm-email');
        } else if (error === 'Request failed with status code 401') {
          toast.error('Incorrect email or password :c');
        } else {
          toast.error('Internal Server Error');
        }
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <DefaultForm
        formValues={formValues}
        errors={errors}
        handleChange={handleChange}
      />
      <AuthBtn>Sign In</AuthBtn>
      <NavLink to="/signup">
        <p className={styles.wrapDesc}>
          <span className={styles.linkQuestion}>Don`t have an account?</span>
          <span className={styles.linkRedirect}>Sign Up</span>
        </p>
      </NavLink>
    </form>
  );
}
