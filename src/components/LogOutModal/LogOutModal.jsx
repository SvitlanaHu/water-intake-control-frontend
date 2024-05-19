/* eslint-disable react/prop-types */
import styles from './LogOutModal.module.css';
import { Modal } from '../Modal/Modal';
import { logOut } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const LogOutModal = ({ isModalOpen, setIsModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    setIsModalOpen(false);
  };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      {isModalOpen && (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
          <div className={styles.form}>
            <div className={styles.infoBox}>
              <h2 className={styles.formTitle}>Log out</h2>
              <p className={styles.text}>Do you really want to leave?</p>
            </div>
            <div className={styles.btnBox}>
              <button
                className={styles.logOutBtn}
                type="button"
                onClick={handleLogOut}
              >
                Log out
              </button>
              <button
                className={styles.cancelBtn}
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default LogOutModal;
