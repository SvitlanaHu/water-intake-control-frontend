import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/HomePage';
import SignInPage from '../pages/AuthPages/SignInPage';
import SignUpPage from '../pages/AuthPages/SignUpPage';
import TrackerPage from '../pages/TrackerPage/TrackerPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage';
import { Toaster } from 'react-hot-toast';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from '../redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import RefreshLoader from './RefreshLoader/RefreshLoader';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import VerifyPage from '../pages/VerifyPage';
import RestrictedAfterRegisterRoute from './RestrictedAfterRegisterRoute';
import ErrorEmailVerifyPage from '../pages/AuthPages/ErrorEmailVerifyPage';
import ConfirmEmailPage from '../pages/AuthPages/ConfirmEmailPage';
import ResetPasswordPage from '../pages/AuthPages/ResetPasswordPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLogedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token && !isLogedIn) {
      dispatch(refreshUser({ token }));
    }
  }, [dispatch, token, isLogedIn]);

  return isRefreshing ? (
    <RefreshLoader />
  ) : (
    <SharedLayout>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/tracker" component={HomePage} />
          }
        />

        <Route
          path="/signup"
          element={
            <RestrictedAfterRegisterRoute
              redirectTo="/confirm-email"
              component={SignUpPage}
            />
          }
        />
        <Route path="/confirm-email" element={<ConfirmEmailPage />} />
        <Route
          path="/verify"
          element={
            <RestrictedAfterRegisterRoute
              redirectTo="/error-verify-email"
              component={VerifyPage}
            />
          }
        />
        <Route path="/error-verify-email" element={<ErrorEmailVerifyPage />} />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={SignInPage} />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute redirectTo="/signin" component={TrackerPage} />
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute redirectTo="/signin" component={StatisticsPage} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={SignInPage} />
          }
        />
        <Route
          path="/reset-password"
          element={
            <RestrictedRoute
              redirectTo="/tracker"
              component={ResetPasswordPage}
            />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: 50,
        }}
        toastOptions={{
          style: {
            color: 'white',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </SharedLayout>
  );
};

export default App;
