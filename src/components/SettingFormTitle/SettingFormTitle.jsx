import css from './SettingFormTitle.module.css';

export const SettingFormTitle = ({ children, margin }) => {
  return (
    <h3
      className={css.settingFormTitle}
      style={{
        marginBottom: `${margin}px`,
      }}
    >
      {children}
    </h3>
  );
};
