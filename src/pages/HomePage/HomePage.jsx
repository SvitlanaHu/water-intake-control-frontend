// import React from 'react';

import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import { Modal } from "../../components/Modal/Modal";
import UserSettingsModal from "../../components/UserSettingsModal/UserSettingsModal";

import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <WelcomeSection className={styles.welcome} />
          <AdvantagesSection className={styles.advantages} />
        </div>
      </div>
    </>
  );
};
export default HomePage;
