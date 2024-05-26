import PropTypes from 'prop-types';
import styles from './AddWaterBtn.module.css';

const AddWaterBtn = ({ handleOpenModal }) => {
  return (
    <button onClick={handleOpenModal} className={styles.btn} type="button">
      <svg className={styles.svg}>
        <use className={styles.icon} href="./../../symbol.svg#icon-plus"></use>
      </svg>
      <a className={styles.btnText}>Add water</a>
    </button>
  );
};

AddWaterBtn.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
};

export default AddWaterBtn;
