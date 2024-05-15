import css from "./SaveButton.module.css";

export const SaveButton = ({ enabled }) => {
  return (
    <button disabled={!enabled} type="submit" className={css.saveButton}>
      Save
    </button>
  );
};
