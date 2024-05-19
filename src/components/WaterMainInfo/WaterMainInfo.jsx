import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterModal from '../WaterModal/WaterModal';
import { useState } from 'react';

const WaterMainInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={css.container}>
      <div className={css.WaterMaininfoContainer}>
        <h1 className={css.header}> AQUATRACK</h1>
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtn handleOpenModal={handleOpenModal} />
        <WaterModal
          operationType="add"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <div className={css.imgWrapper}>
          <img
            className={css.img}
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
