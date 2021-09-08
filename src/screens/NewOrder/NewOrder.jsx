import { Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import actions from '../../modules/Orders/actions'
import ProfileForm from '../../ui/components/ProfileForm/ProfileForm'
import Wrapper from './styled'
import validationSchema from './validate'

const NewOrder = () => {
  const date = () =>
    `${new Date().getFullYear()}.0${
      new Date().getMonth() + 1
    }.${new Date().getDate()} - ${new Date().getHours()}:${new Date().getMinutes()}`

  const dataset = useSelector(state => state.orders.orders)
  const dispatch = useDispatch()
  const { push } = useHistory()

  const getATI = (min, max) => String(Math.floor(Math.random() * (max - min + 1)) + min)

  const submiting = values => {
    try {
      const order = {
        id: dataset.length + 1,
        date: date(),
        corporation: values.corporation,
        surname: values.surname,
        name: values.name,
        patronymic: values.patronymic,
        phoneNumber: values.phoneNumber,
        comments: [],
        ATICode: getATI(10000, 99999),
      }
      dispatch(actions.createOrder(order))
    } catch (e) {
      console.log(e)
    } finally {
      push('/')
    }
  }

  return (
    <Wrapper>
      <h1>Добавьте свою заявку</h1>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          patronymic: '',
          corporation: '',
          phoneNumber: '',
        }}
        validateOnChange
        onSubmit={values => submiting(values)}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <ProfileForm
            {...{
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }}
          />
        )}
      </Formik>
    </Wrapper>
  )
}

export default NewOrder
