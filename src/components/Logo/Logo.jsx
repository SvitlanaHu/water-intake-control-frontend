import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Logo = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
        <ThemeToggle />
    </div>
  );
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
