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
