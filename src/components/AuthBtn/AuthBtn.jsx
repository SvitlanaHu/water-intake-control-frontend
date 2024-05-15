import PropTypes from "prop-types";

import css from "./AuthBtn.module.css";

export default function AuthBtn({ children }) {
  return (
    <button className={css.button} type="submit">
      {children}
    </button>
  );
}
AuthBtn.propTypes = {
  children: PropTypes.string.isRequired, // Перевірка типу властивості children
};
