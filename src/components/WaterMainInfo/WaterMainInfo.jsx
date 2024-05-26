import { useState } from 'react';
import styles from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterModal from '../WaterModal/WaterModal';
import Logo from "../Logo/Logo";


const WaterMainInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.WaterMaininfoContainer}>
        <div className={styles.logoWrap}>
          <Logo text="AquaTrack" />
        </div>
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtn handleOpenModal={handleOpenModal} />
        <WaterModal
          operationType="add"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src="./../../images/bottle@1x.jpg"
            srcSet="./../../images/bottle-desktop@2x.png"
            alt="Water bottle image"
          />
        </div>
      </div>
    </div>
  );
};
export default WaterMainInfo;
