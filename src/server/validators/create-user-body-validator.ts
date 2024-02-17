import * as yup from 'yup'
import { type IUserDTO } from '../entities/users'

export const createUserBodySchema = yup.object<IUserDTO>({
  name: yup.string().required('Name is required!'),
  email: yup.string().email('Email is not valid!').required('Email is required!'),
  password: yup.string().min(6, 'The password must be at least 6 characters long').required('Password is required!'),
  photo: yup.string().required('Photo is required!')
})
