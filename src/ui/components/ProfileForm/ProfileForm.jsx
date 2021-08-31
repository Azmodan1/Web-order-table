import React from 'react'
import PropTypes from 'prop-types'
import '../../../public/index.css'
import { InputControl, Wrapper } from '../../FormStyle/styled'

const ProfileForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
  handleSubmit,
  dirty,
}) => (
  <Wrapper>
    <label>
      Имя
      <InputControl
        name='name'
        type='text'
        placeholder='Имя...'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
    </label>
    {touched.name && errors.name && <span>{errors.name}</span>}
    <label>
      Фамилия
      <InputControl
        name='surname'
        type='text'
        placeholder='Фамилия...'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.surname}
      />
    </label>
    {touched.surname && errors.surname && <span>{errors.surname}</span>}
    <label>
      Отчество
      <InputControl
        name='patronymic'
        type='text'
        placeholder='Отчество...'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.patronymic}
      />
    </label>
    {touched.patronymic && errors.patronymic && <span>{errors.patronymic}</span>}
    <label>
      Компания
      <InputControl
        name='corporation'
        type='text'
        placeholder='Компания...'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.corporation}
      />
    </label>
    {touched.corporation && errors.corporation && <span>{errors.corporation}</span>}
    <label>
      Номер телефона
      <InputControl
        name='phoneNumber'
        type='text'
        placeholder='Номер телефона...'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phoneNumber}
      />
    </label>
    {touched.phoneNumber && errors.phoneNumber && <span>{errors.phoneNumber}</span>}
    <button disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'>
      Создать заявку
    </button>
  </Wrapper>
)

ProfileForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  dirty: PropTypes.bool.isRequired,
}

export default ProfileForm
