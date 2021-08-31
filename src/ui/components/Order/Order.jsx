import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Order = ({ id, date, corporation, name, surname, patronymic, phoneNumber, ATICode }) => (
  <>
    <tr>
      <td> {id}</td>
      <td> {date}</td>
      <td> {corporation}</td>
      <td>
        &nbsp;{surname} &nbsp;{name} &nbsp;{patronymic}
      </td>
      <td> {phoneNumber}</td>
      <td>
        <NavLink
          style={{
            color: 'yellow',
          }}
          to={`/profile/${ATICode}`}
        >
          {ATICode}
        </NavLink>
      </td>
    </tr>
  </>
)

Order.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  corporation: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  ATICode: PropTypes.string.isRequired,
}
export default Order
