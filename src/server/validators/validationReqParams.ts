import * as yup from 'yup'

export const reqParamSchema = yup.object().shape({
  _id: yup.string().min(24).required('Id is required!')
})
