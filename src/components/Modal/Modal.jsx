import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
// import { symbol } from "../../../public/";

export const Modal = ({ active, setActive, children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setActive]);

  const handleOpenModal = () => {
    setActive(true);
  };

  const handleCloseModal = () => {
    setActive(false);
  };

  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.active}`
            : styles.modalContent
        }
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <button className={styles.closeButton} onClick={() => setActive(false)}>
          <svg className={styles.icon} width={24} height={24}>
            <use href={`${symbol}#icon-x`}></use>
          </svg>
          Close
        </button>
      </div>
    </div>
  );
};
