import * as yup from 'yup';
import { updateUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { closeSettingModal } from '../../redux/SettingModal/SettingModalSlice';

export const schema = yup.object().shape({
  name: yup.string().nullable(),
  email: yup
    .string()
    .email('Invalid email format')
    .transform(value => (value === '' ? undefined : value))
    .max(100, 'Max is 100 symbols!'),
  weight: yup
    .string()
    .required('Weight is required')
    .notOneOf(['0'], 'Value cannot be zero')
    .matches(/^\d+(\.\d+)?$/, 'Only numbers please')
    .transform(value => (value === '' ? undefined : value))
    .max(3, 'Max is 3 symbols!')
    .notOneOf(['0'], 'Value cannot be zero'),
  time: yup
    .string()
    .required('Time is required')
    .transform(value => (value === '' ? undefined : value))
    .matches(/^\d+(\.\d+)?$/, 'Only numbers please'),
  amountOfWater: yup
    .string()
    .required('Please indicate the amount of water')
    .notOneOf(['0'], 'Value cannot be zero')
    .matches(/^\d+(\.\d+)?$/, 'Only numbers please')
    .transform(value => (value === '' ? undefined : value)),
});

export const handleUpdateUser = (dispatch, obj) => {
  return dispatch(updateUser(obj))
    .unwrap()
    .then(() => {
      dispatch(closeSettingModal());
      toast.success('Your data has been successfully updated!');
    })
    .catch(error => {
      if (error === 'Request failed with status code 409') {
        toast.error('This email is already taken');
      }
    });
};

export const getDefaultValues = (
  nickname,
  userEmail,
  userWeight,
  dailyWaterIntake,
  userGender,
  avatarURL,
  activeTime
) => {
  const defaultValues = {
    gender: userGender,
    name: nickname,
    email: userEmail,
    weight: userWeight.toString(),
    time: activeTime,
    amountOfWater:
      dailyWaterIntake > 1000
        ? (dailyWaterIntake / 1000).toString()
        : dailyWaterIntake.toString(),
    photo: avatarURL,
  };

  return defaultValues;
};

export const getIsFormChanged = (getValues, defaultValues) => {
  const currentValues = getValues();

  const convertValuesToStrings = obj => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, String(value)])
    );
  };
  const stringifiedDefaultValues = convertValuesToStrings(defaultValues);

  const isFormChanged =
    JSON.stringify(stringifiedDefaultValues) !== JSON.stringify(currentValues);
  return isFormChanged;
};
