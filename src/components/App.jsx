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

// import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/confirm-email" element={<ConfirmEmailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/statistics" element={<Statistics />} />
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
