import React from 'react'
import { PropTypes } from 'prop-types'

import { InputControl } from '../../FormStyle/styled'
import { ContainerBody, ContainerComment, Message } from './styled'

const Comments = ({ value, setValue, privateOrder, addComm }) => (
  <ContainerComment>
    <h1>Комментарии</h1>
    <ContainerBody>
      {privateOrder[0].comments.map(elem => (
        <Message> {elem}</Message>
      ))}
    </ContainerBody>
    <InputControl
      onKeyPress={addComm}
      placeholder='Написать комментарий...'
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </ContainerComment>
)

Comments.propTypes = {
  addComm: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  privateOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
}
export default Comments
