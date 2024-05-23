import PropTypes from 'prop-types';
import css from './TextInput.module.css';

export const TextInput = ({
  children,
  id,
  type = 'text',
  forLabel = '',
  placeholder = '',
  name,
  register,
}) => {
  return (
    <label
      className={`${css.labelForTextInput} ${forLabel && css.labelGap} `}
      htmlFor={id}
    >
      {children}
      {forLabel}
      <input
        {...register(name)}
        placeholder={placeholder}
        className={css.textInput}
        type={type}
        id={id}
      />
    </label>
  );
};

TextInput.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  forLabel: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
