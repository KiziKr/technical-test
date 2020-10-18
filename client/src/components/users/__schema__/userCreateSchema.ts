import { object, string, mixed } from 'yup';

export const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    description: '',
    phone: '',
}

const invalid = 'Ce champs est invalide';
const required = 'Ce champs est requis';

const isRequired = () => {
    return string().required(required);
}

export const userCreateSchema = object().shape({
    email: isRequired().email(invalid),
    password: isRequired(),
    firstName: isRequired(),
    lastName: isRequired(),
    description: isRequired(),
    phone: mixed().required()
});