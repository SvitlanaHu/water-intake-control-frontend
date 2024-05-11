import PropTypes from 'prop-types';
import styles from "./Logo.module.css";

const Logo = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired // Перевірка типу властивості text
};

export default Logo;