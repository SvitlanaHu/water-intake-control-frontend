// import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./WelcomeSection.module.css";
import Logo from "../Logo/Logo";

const WelcomeSection = () => {
  return (
    <header className={styles.container}>
      <div className={styles.box}>
        <Logo text="AquaTrack" />
        <div className={styles.textBox}>
          <p className={styles.text}>Record daily water intake and track</p>
          <h1 className={styles.title}>Water consumption tracker</h1>
        </div>
         
        <div className={styles.linkBox} >
          <Link className={`${styles.linkUp} ${styles.link}`} to="/signup">Try tracker</Link>
          <Link className={`${styles.linkIn} ${styles.link}`} to="/signin">Sign In</Link>
        </div>        
      </div>
    </header>
    
  );
};

export default WelcomeSection;