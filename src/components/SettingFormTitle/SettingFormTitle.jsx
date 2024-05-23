import PropTypes from 'prop-types';
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

SettingFormTitle.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SettingFormTitle.defaultProps = {
  margin: '0',
};
