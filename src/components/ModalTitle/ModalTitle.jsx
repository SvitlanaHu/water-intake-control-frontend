import css from './ModalTitle.module.css';

export const ModalTitle = ({ children, margin }) => {
  return (
    <h3 className={css.modalTitle} style={{ marginBottom: `${margin}px` }}>
      {children}
    </h3>
  );
};
