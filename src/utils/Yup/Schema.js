import * as Yup from 'yup';

export const signIn = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('Password is required.')
});

export const signUp = Yup.object().shape({
  name: Yup.string()
    .required('Name is required.')
    .max(20, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Too short.')
    .max(20, 'Too long.'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required')
});

export const todo = Yup.object().shape({
  todo: Yup.string()
    .required('Task name is required.')
    .min(6, 'Too short.')
    .max(100, 'Too long.')
});
