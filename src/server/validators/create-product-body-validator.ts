import * as yup from 'yup'
import { type IProductDTO } from '../entities/product'

export const createProductBodySchema = yup.object<IProductDTO>({
  name: yup.string().required('name is required!'),
  value: yup.number().required('value is required!'),
  amount: yup.number().required('amount is required!'),
  description: yup.string().required('description is required!')
})
