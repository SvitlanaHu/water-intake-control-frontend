// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './SaveButton.module.css';
// import { updateUser } from '../../redux/auth/operations';

export const SaveButton = ({ enabled, margin = '0' }) => {
  // const dispatch = useDispatch();
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

SaveButton.defaultProps = {
  margin: '0',
};
