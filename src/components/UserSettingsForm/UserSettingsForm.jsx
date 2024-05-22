import * as yup from 'yup';
import { useState } from 'react';
import { SettingFormTitle } from '../SettingFormTitle/SettingFormTitle';
import css from './UserSettingsForm.module.css';
import icons from '../../../public/symbol.svg';
import { TextInput } from '../TextInput/TextInput';
import { Formik, Form } from 'formik';
import { SaveButton } from '../SaveButton/SaveButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { updateUser } from '../../redux/auth/operations';

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
    ),
  amountOfWater: yup
    .string()
    .matches(/^\d+$/, 'Only numbers please')
    .required('Required!'),
});

const UserSettingsForm = () => {
  const { avatarURL } = useSelector(selectUser);
  const user = useSelector(selectUser);
  console.log(user);
  const [img, setImg] = useState(null);
  const [gender, setGender] = useState('woman');
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const onInputFileChange = ev => {
    setImg(URL.createObjectURL(ev.target.files[0]));
  };

  const handleFormSumbit = (values, actions) => {
    const formData = new FormData();

    // formData.append('avatar', img);
    formData.append('gender', gender);
    formData.append('nickname', values.name);
    formData.append('email', values.email);
    formData.append('weight', values.weight);
    formData.append('activeTime', values.time);
    formData.append('dailyWaterIntake', values.amountOfWater);
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    formData.append('password', 'Igoresha1713');
    formData.append('timezone', userTimeZone);
    formData.append('subscription', 'PRO');
    dispatch(updateUser(formData));
    actions.resetForm();
  };

  const handleFormChange = ev => {
    const { name, value } = ev.target;
    switch (name) {
      case 'weight':
        setWeight(value);
        break;
      case 'time':
        setTime(value);
        break;
      default:
        break;
    }
  };

  const amountOfWaterFormula =
    gender === 'woman'
      ? weight * 0.03 + time * 0.4
      : weight * 0.04 + time * 0.6;

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        amountOfWater: '',
        weight: '',
        time: '',
      }}
      onSubmit={handleFormSumbit}
      validationSchema={schema}
    >
      {({ dirty, isValid }) => (
        <Form onChange={ev => handleFormChange(ev)}>
          <div className={css.photoContainer}>
            <img
              className={css.settingFormImg}
              src={!img ? avatarURL : img}
              alt="userAvatar"
            />
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
                  pattern="[0-9]*"
                  id="weight"
                  type="text"
                  forLabel="Your weight in kilograms:"
                  placeholder="0"
                  name="weight"
                ></TextInput>
                <TextInput
                  pattern="[0-9]*"
                  placeholder="0"
                  id="time"
                  type="text"
                  forLabel="The time of active participation in sports:"
                  name="time"
                ></TextInput>
              </div>
              <div className={css.requiredAmountTextContainer}>
                <p className={css.requiredAmountText}>
                  The required amount of water in liters per day:
                </p>
                <p className={css.amountOfWater}>
                  {!dirty ||
                  amountOfWaterFormula === 0 ||
                  isNaN(amountOfWaterFormula)
                    ? '1.8 L'
                    : amountOfWaterFormula.toFixed(1)}
                </p>
              </div>
              <TextInput
                name="amountOfWater"
                placeholder="1.8"
                id="amountOfWater"
                type="text"
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
