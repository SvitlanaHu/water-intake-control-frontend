import PropTypes from 'prop-types';
// import styles from "./SharedLayout.module.css";
// import React from 'react';
// import { Route } from 'react-router-dom';

const SharedLayout = ({ children }) => {
  return (
    <div>
      {/* Відмальовуємо загальний інтерфейс для всіх сторінок */}
      <header>
        {/* Logo, навігація або інші загальні елементи */}
      </header>
      <main>
        {/* Відображаємо діти (вкладені маршрути та їх сторінки) */}
        {children}
      </main>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired // Перевірка типу властивості children
};

export default SharedLayout;