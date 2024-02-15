import * as yup from 'yup';
import { IProduct } from '../entities/product';

export const reqParamSchema = yup.object().shape({
  _id: yup.string().min(24).required('Id is required!')
});