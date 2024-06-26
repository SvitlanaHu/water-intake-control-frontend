import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import toast from 'react-hot-toast';
import RefreshLoader from '../RefreshLoader/RefreshLoader';

import {
  schema,
  handleUpdateUser,
  getDefaultValues,
  getIsFormChanged,
} from './helpers';
import { useForm } from 'react-hook-form';
import { SettingFormTitle } from '../SettingFormTitle/SettingFormTitle';
import css from './UserSettingsForm.module.css';
import icons from '../../../public/symbol.svg';
import { TextInput } from '../TextInput/TextInput';
import { SaveButton } from '../SaveButton/SaveButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectUser } from '../../redux/auth/selectors';
import { updateAvatar } from '../../redux/auth/operations';
import { closeSettingModal } from '../../redux/SettingModal/SettingModalSlice';

const UserSettingsForm = () => {
  const {
    avatarURL,
    nickname,
    weight: userWeight,
    dailyWaterIntake,
    gender: userGender,
    email: userEmail,
    activeTime,
  } = useSelector(selectUser);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const defaultValues = getDefaultValues(
    nickname,
    userEmail,
    userWeight,
    dailyWaterIntake,
    userGender,
    avatarURL,
    activeTime
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, errors },
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues, gender: userGender },
  });

  const [img, setImg] = useState(null);
  const [file, setFile] = useState(null);
  const gender = watch('gender');
  const weight = watch('weight');
  const time = watch('time');
  const onInputFileChange = ev => {
    const file = ev.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImg(imageUrl);
    setFile(file);
    setValue('photo', imageUrl);
  };

  const isFormChange = getIsFormChanged(getValues, defaultValues);

  const onSubmit = data => {
    const { name, email, weight: newWeight, time, amountOfWater } = data;
    const formData = new FormData();
    if (gender !== userGender) formData.append('gender', gender);
    if (name !== nickname) formData.append('nickname', name);
    if (email !== userEmail) formData.append('email', email);
    if (newWeight != userWeight) {
      formData.append('weight', newWeight);
    }
    if (time != activeTime) formData.append('activeTime', time);
    if (amountOfWater.toString() != dailyWaterIntake / 1000) {
      formData.append('dailyWaterIntake', amountOfWater * 1000);
    }

    const obj = {};

    formData.forEach((value, key) => {
      obj[key] = value;
    });

    if (Object.keys(obj).length !== 0) {
      handleUpdateUser(dispatch, obj, watch, getValues);
    }

    if (file) {
      const avatarFormData = new FormData();
      avatarFormData.append('avatar', file);

      dispatch(updateAvatar(avatarFormData))
        .unwrap()
        .then(() => {
          toast.success('Your avatar has been successfully updated!');
          dispatch(closeSettingModal());
        });
    }
  };

  const getAmount = () => {
    if (weight === 0 || time === 0 || weight === '' || time === '') {
      return '1.8';
    } else {
      const amount =
        gender === 'woman'
          ? weight * 0.03 + time * (0.4).toFixed(1)
          : weight * 0.04 + time * (0.6).toFixed(1);

      return amount.toFixed(1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <RefreshLoader />}
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
            {...register('photo')}
            onChange={ev => onInputFileChange(ev)}
            type="file"
            name="photo"
            id="photo"
            accept="image/jpeg"
          />
        </label>
      </div>

      <SettingFormTitle margin="14">Your gender identity</SettingFormTitle>

      <label className={css.radioLabel}>
        <input
          {...register('gender')}
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
          {...register('gender')}
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
            <TextInput
              register={register}
              id="name"
              type="text"
              placeholder="Mary"
              name="name"
              errors={errors}
            >
              <SettingFormTitle margin="8">Your name</SettingFormTitle>
            </TextInput>
            {errors.name && <p>{errors.name.message}</p>}
            <TextInput
              errors={errors}
              register={register}
              id="email"
              type="email"
              name="email"
              placeholder="mary@ukr.net.com"
            >
              <SettingFormTitle margin="8">Email</SettingFormTitle>
            </TextInput>
            {errors.email && <p>{errors.email.message}</p>}
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
            <span>*</span> V is the volume of the water norm in liters per day,
            M is your body weight, T is the time of active sports, or another
            type of activity commensurate in terms of loads (in the absence of
            these, you must set 0)
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
              errors={errors}
              register={register}
              pattern="[0-9]*"
              id="weight"
              type="text"
              forLabel="Your weight in kilograms:"
              placeholder="0"
              name="weight"
            ></TextInput>
            {errors.weight && <p>{errors.weight.message}</p>}

            <TextInput
              errors={errors}
              register={register}
              pattern="[0-9]*"
              placeholder="0"
              id="time"
              type="text"
              forLabel="The time of active participation in sports:"
              name="time"
            ></TextInput>
            {errors.time && <p>{errors.time.message}</p>}
          </div>
          <div className={css.requiredAmountTextContainer}>
            <p className={css.requiredAmountText}>
              The required amount of water in liters per day:
            </p>
            <p className={css.amountOfWater}>{`${getAmount()} L`}</p>
          </div>
          <TextInput
            errors={errors}
            register={register}
            name="amountOfWater"
            placeholder="1.8"
            id="amountOfWater"
            type="text"
          >
            <SettingFormTitle margin="8">
              Write down how much water you will drink:
            </SettingFormTitle>
          </TextInput>
          {errors.amountOfWater && <p>{errors.amountOfWater.message}</p>}
        </div>
      </div>
      <SaveButton
        margin="40"
        enabled={
          (file || isDirty) && Object.keys(errors).length === 0 && isFormChange
        }
      />
    </form>
  );
};
export default UserSettingsForm;
