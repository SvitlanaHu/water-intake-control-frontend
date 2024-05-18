import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { logIn } from '../../redux/auth/operations';
import styles from './SignInForm.module.css';
import AuthBtn from '../AuthBtn/AuthBtn';
import DefaultForm from '../DefautForm/DefautForm';
import { Navigate, useNavigate } from 'react-router-dom/dist';
import { useState } from 'react';

export default function SignInForm() {
  const dispatch = useDispatch();
  // const [isLoginedIn, setIsLoginedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        form.reset();
        toast.success('Login success');
        // setIsLoginedIn(true);
        navigate('/tracker');
      })
      .catch(error => {
        console.log('status', error);
        if (error === 'Request failed with status code 403') {
          toast.error('Please verify email');
          navigate('/confirm-email');
        } else {
          toast.error('Incorrect email or password :c');
        }
      });
  };

  // if (isLoginedIn) {
  //   return <Navigate to="/tracker" />;
  // }

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <DefaultForm />
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
