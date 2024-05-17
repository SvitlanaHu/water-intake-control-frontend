/* eslint-disable react/prop-types */
import css from './WaterItem.module.css';
// import WaterModal from "../WaterModal/WaterModal";
// import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import dayjs from 'dayjs';

const WaterItem = ({ data }) => {
  console.log(data);
  const formattedTime = dayjs(data.date).format('h:mm A');

  return (
    <li>
      <div className={css.waterItemContainer}>
        <svg className={css.svgGlass}>
          <use
            className={css.grassIcon}
            href="../../../public/symbol.svg#icon-water-glass"
          ></use>
        </svg>

        <div className={css.textContainer}>
          <p className={css.textWater}>{data.volume}ml</p>
          <p className={css.textTime}>{formattedTime}</p>
        </div>

        <div className={css.editScript}>
          <svg className={css.editSvgContainer}>
            <use
              className={css.editIcon}
              href="../../../public/symbol.svg#icon-edit-2"
            ></use>
          </svg>
          <svg className={css.editSvgContainer}>
            <use
              className={css.editIcon}
              href="../../../public/symbol.svg#icon-trash-04"
            ></use>
          </svg>
        </div>
      </div>
    </li>
  );
};
export default WaterItem;
