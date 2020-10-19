import { object, string } from 'yup';

export const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    description: '',
    phone: '',
}

export const message = {
    invalid: 'Ce champs est invalide',
    required: 'Ce champs est requis',
}

const isRequired = () => {
    return string().required(message.required);
}

export const userCreateSchema = object().shape({
    email: isRequired().email(message.invalid),
    password: isRequired(),
    firstName: isRequired(),
    lastName: isRequired(),
    description: isRequired(),
    phone: isRequired()
        .min(10, 'Doit contenir exactement 10 chiffres')
        .max(10, 'Doit contenir exactement 10 chiffres')
});