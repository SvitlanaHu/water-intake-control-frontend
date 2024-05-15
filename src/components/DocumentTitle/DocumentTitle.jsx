// import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

import styles from "./DocumentTitle.module.css";

export default function DocumentTitle({ children }) {
  return (
    // <Helmet>
    <h2 className={styles.title}>{children}</h2>
    // </Helmet>
  );
}

DocumentTitle.propTypes = {
  children: PropTypes.string.isRequired, // Перевірка типу властивості children
};
