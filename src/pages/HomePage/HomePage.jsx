// import React from 'react';

import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import styles from "./HomePage.module.css";
import WaterModal from "../../components/WaterModal/WaterModal";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <WelcomeSection className={styles.welcome} />
        <AdvantagesSection className={styles.advantages} />
        <WaterModal operationType="edit" />
      </div>
    </div>
  );
};
export default HomePage;
