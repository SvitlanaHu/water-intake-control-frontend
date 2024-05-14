// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/HomePage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import TrackerPage from '../pages/TrackerPage/TrackerPage';
import Statistics from '../pages/Statistics';
// import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/statistics" element={<Statistics />} />
        {/* Додайте інші маршрути, які вам потрібні */}
      </Routes>
    </SharedLayout>
  );
};

export default App;
