import * as yup from 'yup';

export const signinBodySchema = yup.object({
  email: yup.string().email('Email is not valid').required('Email is required!'),
  password: yup.string().min(6,'The password must be at least 6 characters long').required('Password is required!'),
});