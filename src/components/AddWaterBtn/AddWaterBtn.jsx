import PropTypes from 'prop-types';
import css from './AddWaterBtn.module.css';

const AddWaterBtn = ({ handleOpenModal }) => {
  return (
    <button onClick={handleOpenModal} className={css.btn} type="button">
      <svg className={css.svg}>
        <use className={css.icon} href="./../../symbol.svg#icon-plus"></use>
      </svg>
      <a className={css.btnText}>Add water</a>
    </button>
  );
};

AddWaterBtn.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
};

export default AddWaterBtn;
