import * as yup from 'yup'

export const validationBodyJewels = yup.object().shape({
  jewelsAmount: yup.number().positive('Value is not positive').required('jewelsAmount is required!')
})
