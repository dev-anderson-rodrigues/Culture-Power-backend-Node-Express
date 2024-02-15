import * as yup from 'yup';
import { IProductDTO } from '../entities/product';

export const createProductBodySchema = yup.object<IProductDTO>({
  name: yup.string().required(),
  value: yup.number().required(),
  amount: yup.number().required(),
  description: yup.string().required(),
  photo: yup.string().required(),
});