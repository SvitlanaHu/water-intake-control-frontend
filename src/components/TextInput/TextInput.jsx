import css from './TextInput.module.css';
import { useFormContext } from 'react-hook-form';

export const TextInput = ({
  children,
  id,
  type,
  forLabel,
  placeholder,
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
