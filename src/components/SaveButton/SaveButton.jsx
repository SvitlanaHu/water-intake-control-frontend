import { useDispatch } from 'react-redux';
import css from './SaveButton.module.css';
import { updateUser } from '../../redux/auth/operations';

export const SaveButton = ({ enabled, margin = '0' }) => {
  const dispatch = useDispatch();
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
