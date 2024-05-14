import { useEffect } from "react";
import styles from "./Modal.module.css";
import symbol from "../../../public/symbol.svg";

export const Modal = ({ active, setActive, children }) => {
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

  const handleCloseModal = () => {
    setActive(false);
  };

  if (active)
    return (
      <div className={styles.modalBackdrop} onClick={() => setActive(false)}>
        <div
          className={styles.modalWrapper}
          onClick={(event) => event.stopPropagation()}
        >
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
