// import React from 'react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/HomePage';
import SignInPage from '../pages/AuthPages/SignInPage';
import SignUpPage from '../pages/AuthPages/SignUpPage';
import TrackerPage from '../pages/TrackerPage/TrackerPage';
import Statistics from '../pages/Statistics';
import { Toaster } from 'react-hot-toast';
import ConfirmEmailPage from '../pages/AuthPages/ConfirmEmailPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import RefreshLoader from './RefreshLoader/RefreshLoader';
import RestrictedRoute from './RestrictedRoute';

// import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log('isRefreshing', isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <RefreshLoader />
  ) : (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/confirm-email"
              component={SignUpPage}
            />
          }
        />
        <Route path="/confirm-email" element={<ConfirmEmailPage />} />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={SignInPage} />
          }
        />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* Додайте інші маршрути, які вам потрібні */}
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
