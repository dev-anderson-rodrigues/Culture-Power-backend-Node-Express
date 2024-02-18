import * as yup from 'yup'

export const validationBodyJewels = yup.object().shape({
  jewelsAmount: yup.number().required('jewelsAmount is required!')
})
