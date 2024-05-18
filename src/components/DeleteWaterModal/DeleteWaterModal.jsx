/* eslint-disable react/prop-types */
import styles from './DeleteWaterModal.module.css';
import { Modal } from '../Modal/Modal';

const DeleteWaterModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleDelete = () => {
    // логіка для видалення запису
    console.log('Deleting entry...');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
          <div className={styles.form}>
            <div className={styles.infoBox}>
              <h2 className={styles.formTitle}>Delete entry</h2>
              <p className={styles.text}>
                Are you sure you want to delete the entry?
              </p>
            </div>
            <div className={styles.btnBox}>
              <button className={styles.deleteBtn} type="button">
                Delete
              </button>
              <button className={styles.cancelBtn} type="button">
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteWaterModal;
