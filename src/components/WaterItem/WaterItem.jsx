/* eslint-disable react/prop-types */
import css from './WaterItem.module.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useState } from 'react';
import WaterModal from '../WaterModal/WaterModal';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal';

dayjs.extend(utc);
dayjs.extend(timezone);

const WaterItem = ({ data }) => {
  const userTimezone = dayjs.tz.guess();
  const formattedTime = dayjs(data.date).tz(userTimezone).format('h:mm A');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const formatVolume = volume => {
    if (volume > 1000) {
      return `${(volume / 1000).toFixed(1)} L`;
    }
    return `${volume} ml`;
  };

  return (
    <li>
      <div className={css.waterItemContainer}>
        <svg className={css.svgGlass}>
          <use
            className={css.grassIcon}
            href="../../../symbol.svg#icon-water-glass"
          ></use>
        </svg>

        <div className={css.textContainer}>
          <p className={css.textWater}>{formatVolume(data.volume)}</p>
          <p className={css.textTime}>{formattedTime}</p>
        </div>

        <div className={css.editScript}>
          <button
            type="button"
            className={css.btn}
            onClick={handleOpenEditModal}
          >
            <svg className={css.editSvgContainer}>
              <use
                className={css.editIcon}
                href="../../../symbol.svg#icon-edit-2"
              ></use>
            </svg>
          </button>
          <button
            type="button"
            className={css.btn}
            onClick={handleOpenDeleteModal}
          >
            <svg className={css.editSvgContainer}>
              <use
                className={css.editIcon}
                href="../../../symbol.svg#icon-trash-04"
              ></use>
            </svg>
          </button>
        </div>

        <WaterModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
          id={data.id}
          operationType="edit"
          waterData={data}
        />
        <DeleteWaterModal
          isModalOpen={isDeleteModalOpen}
          setIsModalOpen={setIsDeleteModalOpen}
          id={data.id}
        />
      </div>
    </li>
  );
};
export default WaterItem;
