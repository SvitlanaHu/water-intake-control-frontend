import PropTypes from 'prop-types';

import styles from './DocumentTitle.module.css';

export default function DocumentTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

DocumentTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
