import React from 'react'
import { PropTypes } from 'prop-types'

import Order from '../Order/Order'
import StyledTable from './StyledTable'
import TableHeader from './TableHeader'
import TableWrapper from './TableWrapper'

const Table = ({ filteredData }) => (
  <TableWrapper>
    <StyledTable>
      <tbody>
        <TableHeader />
        {filteredData?.map(data => (
          <Order
            key={data.id}
            id={data.id}
            date={data.date}
            corporation={data.corporation}
            name={data.name}
            surname={data.surname}
            patronymic={data.patronymic}
            phoneNumber={data.phoneNumber}
            ATICode={data.ATICode}
          />
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
)

Table.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Table
