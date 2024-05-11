import styles from "./Logo.module.css";
import React from 'react';

const Logo = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Logo;