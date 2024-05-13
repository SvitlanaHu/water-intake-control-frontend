import css from "./AuthBtn.module.css";

export default function AuthBtn({ children }) {
  return (
    <button className={css.button} type="submit">
      {children}
    </button>
  );
}
