import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'

import Wrapper from './styled'
import actions from '../../modules/Orders/actions'
import ProflePage from '../../ui/components/ProfilePage/ProflePage'

import Comments from '../../ui/components/ProfilePage/Comments'

const Profile = () => {
  const date = () =>
    `${new Date().getFullYear()}.0${
      new Date().getMonth() + 1
    }.${new Date().getDate()} - ${new Date().getHours()}:${new Date().getMinutes()}`

  const { push } = useHistory()
  const [value, setValue] = useState('')
  const ord = useSelector(state => state.orders.orders)
  const dispatch = useDispatch()
  const match = useRouteMatch('/profile/:ATICode')
  const privateOrder = ord.filter(item => item.ATICode === match.params.ATICode)

  const addComm = e => {
    if (e.key === 'Enter') {
      privateOrder[0].comments.push(value)
      setValue('')
    }
  }

  console.log(privateOrder)
  const handleDelete = () => {
    dispatch(actions.deleteOrder(privateOrder[0].id))
    push('/')
  }
  return (
    <Wrapper>
      <ProflePage
        handleDelete={handleDelete}
        match={match}
        privateOrder={privateOrder}
        date={date}
      />
      <Comments addComm={addComm} privateOrder={privateOrder} value={value} setValue={setValue} />
    </Wrapper>
  )
}

export default Profile
