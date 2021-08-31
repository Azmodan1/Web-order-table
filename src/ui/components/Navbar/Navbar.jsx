import React from 'react'
import { useHistory } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { InputControl } from '../../FormStyle/styled'
import Button from '../../Button/styled'
import Wrapper from './styled'
import routeNames from '../../../core/routeNames'

const Navbar = ({ value, handleChange }) => {
  const { push } = useHistory()

  return (
    <Wrapper>
      <InputControl
        value={value.query}
        onChange={handleChange}
        width='700px'
        height='40px'
        placeholder='Поиск заявки...'
      />
      <Button onClick={() => push(routeNames.newOrd)}>Добавить заявку</Button>
    </Wrapper>
  )
}

Navbar.propTypes = {
  value: PropTypes.shape({ query: PropTypes.string, base: PropTypes.arrayOf(PropTypes.object) })
    .isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Navbar
