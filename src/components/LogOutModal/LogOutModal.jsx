import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import styles from './LogOutModal.modale.css';
import { Modal } from '../Modal/Modal';
import { logOut } from '../../redux/auth/operations';
// import { clearStore } from '../../redux/store';

const LogOutModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log('Logging out...');
    dispatch(logOut());
    setIsModalOpen(false);
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
                onClick={handleCancel}
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
