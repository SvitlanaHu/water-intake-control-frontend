import * as yup from 'yup';
import { updateUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';


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
    return dispatch(updateUser(obj))
        .unwrap()
        .then(() => {
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