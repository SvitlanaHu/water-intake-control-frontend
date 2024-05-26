import PropTypes from 'prop-types';
import css from './AuthBtn.module.css';

export default function AuthBtn({ children, disabled }) {
  return (
    <button
      className={`${css.button} ${disabled ? css.disabledButton : ''}`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

AuthBtn.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
