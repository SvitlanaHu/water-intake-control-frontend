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
        .matches(/^\d+(\.\d+)?$/, 'Only numbers please')
        .transform(value => (value === '' ? undefined : value))
        .max(3, 'Max is 3 symbols!'),
    time: yup
        .string()
        .nullable()
        .transform(value => (value === '' ? undefined : value))
        .matches(/^\d+(\.\d+)?$/, 'Only numbers please'),
    amountOfWater: yup
        .string()
        .matches(/^\d+(\.\d+)?$/, 'Only numbers please')
        .transform(value => (value === '' ? undefined : value)),
});

export const handleUpdateUser = (dispatch, obj) => {
    console.log(obj)
    return dispatch(updateUser(obj))
        .unwrap()
        .then(() => {
            dispatch(closeSettingModal())
            toast.success('Your data has been successfully updated!');
        })
        .catch(error => {
            if (error === 'Request failed with status code 409') {
                toast.error('This email is already taken');
            }
        });
};



export const handleFormChange = (ev, setWeight, setTime) => {
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



export const getDefaultValues = (nickname, userEmail, userWeight, dailyWaterIntake) => {
    const defaultValues = {
        name: nickname,
        email: userEmail,
        weight: userWeight.toString(),
        time: '',
        amountOfWater: dailyWaterIntake > 1000 ? (dailyWaterIntake / 1000).toString() : dailyWaterIntake.toString(),
        photo: null,
    };

    return defaultValues;
};


export const getIsFormChanged = (getValues, defaultValues) => {

    const currentValues = getValues();

    const isFormChanged =
        JSON.stringify(defaultValues) !== JSON.stringify(currentValues);
    return isFormChanged

}