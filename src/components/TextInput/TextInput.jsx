import { ErrorMessage, Field } from 'formik';
import css from './TextInput.module.css';

export const TextInput = ({
  children,
  id,
  type,
  forLabel,
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <label
      className={`${css.labelForTextInput} ${forLabel && css.labelGap} `}
      htmlFor={id}
    >
      {children}
      {forLabel}
      <Field
        onChange={onChange ? onChange : undefined}
        name={name}
        placeholder={placeholder}
        className={css.textInput}
        type={type}
        id={id}
        value={value}
      ></Field>
      <ErrorMessage className={css.errorMessage} name={name} component="span" />
    </label>
  );
};
