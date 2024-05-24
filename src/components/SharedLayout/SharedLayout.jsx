import PropTypes from 'prop-types';

const SharedLayout = ({ children }) => {
  return (
    <div>
      {/* Відмальовуємо загальний інтерфейс для всіх сторінок */}
      <header>{/* Logo, навігація або інші загальні елементи */}</header>
      <main>
        {/* Відображаємо діти (вкладені маршрути та їх сторінки) */}
        {children}
      </main>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
