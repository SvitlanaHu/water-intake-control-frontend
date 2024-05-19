import css from './DailyInfo.module.css';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterDetailedBtn from '../AddWaterDetailedBtn/AddWaterDetailedBtn';
import WaterList from '../WaterList/WaterList';
import WaterModal from '../WaterModal/WaterModal';
import { useState } from 'react';

const DailyInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={css.dailyCont}>
      <div className={css.dateAdd}>
        <ChooseDate />
        <AddWaterDetailedBtn handleOpenModal={handleOpenModal} />
        <WaterModal
          operationType="add"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className={css.scrollDiv}>
        <WaterList />
      </div>
    </div>
  );
};
export default DailyInfo;
