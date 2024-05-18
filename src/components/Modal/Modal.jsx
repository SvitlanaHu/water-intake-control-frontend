import { useEffect } from 'react';
import styles from './Modal.module.css';

// import { symbol } from "../Modal/icon/symbol.svg";
import { ModalTitle } from '../ModalTitle/ModalTitle';

import symbol from '../../../public/symbol.svg';

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
      window.removeEventListener('keydown', handleEscape);
    };
  }, [setActive, active]);

  const handleCloseModal = () => {
    setActive(false);
  };

  if (active)
    return (
      <div className={styles.modalBackdrop} onClick={() => setActive(false)}>
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
};
