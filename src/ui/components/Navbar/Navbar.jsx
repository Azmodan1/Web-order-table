import React from 'react'
import { useHistory } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { InputControl } from '../../FormStyle/styled'
import Button from '../../Button/styled'
import Wrapper from './styled'
import routeNames from '../../../core/routeNames'

const Navbar = ({ state, handleChange }) => {
  const { push } = useHistory()

  return (
    <Wrapper>
      <InputControl
        state={state}
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
  state: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Navbar
