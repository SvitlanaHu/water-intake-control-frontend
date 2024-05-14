// import React from 'react';

import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import styles from "./HomePage.module.css";
import WaterModal from "../../components/WaterModal/WaterModal";
// import DeleteWaterModal from "../../components/DeleteWaterModal/DeleteWaterModal";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <WelcomeSection className={styles.welcome} />
        <AdvantagesSection className={styles.advantages} />
        <WaterModal operationType="edit" />
        {/* <DeleteWaterModal /> */}
      </div>
    </div>
  );
};
export default HomePage;
