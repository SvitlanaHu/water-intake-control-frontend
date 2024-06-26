/* eslint-disable react/prop-types */
import css from './AddWaterDetailedBtn.module.css';

const AddWaterDetailedBtn = ({ handleOpenModal }) => {
  return (
    <button className={css.btn} type="button" onClick={handleOpenModal}>
      <svg className={css.svg}>
        <use className={css.icon} href="../../../symbol.svg#icon-plus"></use>
      </svg>
      <p className={css.btnText}>Add water</p>
    </button>
  );
};

export default AddWaterDetailedBtn;
