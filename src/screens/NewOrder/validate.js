import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required('Это обязательное поле'),
  surname: yup.string().required('Это обязательное поле'),
  patronymic: yup.string().required('Это обязательное поле'),
  corporation: yup.string().required('Это обязательное поле'),
  phoneNumber: yup.number().typeError('Должно быть числом').required('Это обязательное поле'),
})

export default validationSchema
