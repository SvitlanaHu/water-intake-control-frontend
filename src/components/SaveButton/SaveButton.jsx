import PropTypes from 'prop-types';
import css from './SaveButton.module.css';

export const SaveButton = ({ enabled, margin = '0' }) => {
  return (
    <button
      style={{ marginTop: `${margin}px` }}
      disabled={!enabled}
      type="submit"
      className={css.saveButton}
    >
      Save
    </button>
  );
};

SaveButton.propTypes = {
  enabled: PropTypes.bool.isRequired,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
