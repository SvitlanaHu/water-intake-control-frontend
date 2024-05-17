import * as yup from 'yup';
import { useState } from 'react';
import { SettingFormTitle } from '../SettingFormTitle/SettingFormTitle';
import css from './UserSettingsForm.module.css';
import icons from '../../../public/symbol.svg';
import { TextInput } from '../TextInput/TextInput';
import { Formik, Form } from 'formik';
import { SaveButton } from '../SaveButton/SaveButton';

const schema = yup.object().shape({
  name: yup
    .string()
    .required("We can't help you if we don't know your name :)"),
  email: yup
    .string()
    .required('Required!')
    .email('Invalid email format')
    .max(100, 'Max is 100 symbols!'),
  weight: yup
    .string()
    .matches(/^\d+$/, 'Kilograms are something like numbers, hmm?')
    .required('Required!')
    .max(3, 'Max is 3 symbols!'),
  time: yup
    .string()
    .matches(/^\d+$/, 'Hours are something like numbers, hmm?')
    .test(
      'max-hours',
      'Easier, tiger...There are only 24 hours in a day',
      value => {
        return parseInt(value, 10) <= 24;
      }
    )
    .required('Required!')
    .max(24, 'Easier, tiger...There are only 24 hours in a day'),
  amountOfWater: yup
    .string()
    .matches(/^\d+$/, 'Only numbers please')
    .required('Required!'),
});

const handleFormClick = ev => {
  ev.preventDefault();
  const formData = new FormData(ev.target);
};

const UserSettingsForm = () => {
  const [img, setImg] = useState(null);
  const [gender, setGender] = useState('man');
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [amountOfWater, setAmountOfWater] = useState(0);
  const onInputFileChange = ev => {
    setImg(URL.createObjectURL(ev.target.files[0]));
  };

  const amountOfWaterFormula = gender === 'man' ? {} : {};

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        amountOfWater: '',
        weight: '',
        time: '',
      }}
      validationSchema={schema}
    >
      {({ dirty, isValid }) => (
        <Form onSubmit={ev => handleFormClick(ev)}>
          <div className={css.photoContainer}>
            {img && <img className={css.settingFormImg} src={img} />}
            <label htmlFor="photo">
              <svg>
                <use href={`${icons}#icon-upload`}></use>
              </svg>
              Upload a photo
              <input
                onChange={ev => onInputFileChange(ev)}
                type="file"
                name="photo"
                id="photo"
              />
            </label>
          </div>

          <SettingFormTitle margin="14">Your gender identity</SettingFormTitle>
          <label className={css.radioLabel}>
            <input
              onChange={() => setGender('woman')}
              className={css.radioInput}
              type="radio"
              name="gender"
              value="woman"
              checked={gender === 'woman'}
            />
            Woman
          </label>
          <label className={css.radioLabel}>
            <input
              onChange={() => setGender('man')}
              className={css.radioInput}
              type="radio"
              name="gender"
              value="man"
              checked={gender === 'man'}
            />
            Man
          </label>

          <div className={css.form}>
            <div className={css.halfFormContainer}>
              <div className={css.textInputContainer}>
                <TextInput id="name" type="text" placeholder="Mary" name="name">
                  <SettingFormTitle margin="8">Your name</SettingFormTitle>
                </TextInput>

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="mary@ukr.net.com"
                >
                  <SettingFormTitle margin="8">Email</SettingFormTitle>
                </TextInput>
              </div>
              <SettingFormTitle margin="14">My daily norma</SettingFormTitle>
              <ul className={css.formulaList}>
                <li className={css.formulaListItem}>
                  <p className={css.formulaTitle}>For woman</p>
                  <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
                </li>
                <li className={css.formulaListItem}>
                  <p className={css.formulaTitle}>For man</p>
                  <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
                </li>
              </ul>
              <p className={`${css.explanationText} ${css.text} `}>
                <span>*</span> V is the volume of the water norm in liters per
                day, M is your body weight, T is the time of active sports, or
                another type of activity commensurate in terms of loads (in the
                absence of these, you must set 0)
              </p>
              <p className={`${css.text} ${css.activeTimeText}`}>
                <svg>
                  <use href={`${icons}#icon-exclamation-mark`}></use>
                </svg>{' '}
                Active time in hours
              </p>
            </div>
            <div className={css.halfFormContainer}>
              <div className={css.indicatorsContainer}>
                <TextInput
                  value={weight}
                  id="weight"
                  type="text"
                  forLabel="Your weight in kilograms:"
                  placeholder="0"
                  name="weight"
                  onChange={ev => {
                    setWeight(ev.target.value);
                  }}
                ></TextInput>
                <TextInput
                  placeholder="0"
                  id="time"
                  type="text"
                  forLabel="The time of active participation in sports:"
                  name="time"
                  onChange={ev => {
                    setTime(ev.target.value);
                  }}
                  value={time}
                ></TextInput>
              </div>
              <div className={css.requiredAmountTextContainer}>
                <p className={css.requiredAmountText}>
                  The required amount of water in liters per day:
                </p>
                <p className={css.amountOfWater}>1.8 L</p>
              </div>
              <TextInput
                name="amountOfWater"
                placeholder="1.8"
                id="amountOfWater"
                type="text"
                value={amountOfWater}
                onChange={ev => {
                  setAmountOfWater(ev.target.value);
                }}
              >
                <SettingFormTitle margin="8">
                  Write down how much water you will drink:
                </SettingFormTitle>
              </TextInput>
            </div>
          </div>
          <SaveButton margin="40" enabled={isValid && dirty} />
        </Form>
      )}
    </Formik>
  );
};
export default UserSettingsForm;
