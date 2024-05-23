/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styles from './Modal.module.css';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import symbol from '../../../public/symbol.svg';
import { useDispatch } from 'react-redux';
import { closeSettingModal } from '../../redux/SettingModal/SettingModalSlice';

export const Modal = ({
  isSettingModal,
  active,
  setActive,
  children,
  title,
}) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        setActive(false);
      }
    };

    if (active) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('modal-active');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [active, setActive]);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeSettingModal());
    setActive(false);
  };

  if (active) {
    return (
      <div className={styles.modalBackdrop} onClick={handleCloseModal}>
        <div
          className={
            isSettingModal ? styles.modalWrapper : styles.modalsWrapper
          }
          onClick={event => event.stopPropagation()}
        >
          <ModalTitle margin="20">{title}</ModalTitle>
          {children}
          <button className={styles.closeButton} onClick={handleCloseModal}>
            <svg className={styles.closeIcon}>
              <use href={`${symbol}#icon-x`}></use>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return null;
};
