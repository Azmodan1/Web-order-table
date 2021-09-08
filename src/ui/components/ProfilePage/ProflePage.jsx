import React from 'react'
import { PropTypes } from 'prop-types'

import { DataContainer, DataName, Container } from './styled'
import Button from '../../Button/styled'

const ProflePage = ({ handleDelete, date, match, privateOrder }) => (
  <Container>
    <DataContainer>
      Номер заявки:
      <DataName> &nbsp;{privateOrder[0].id}</DataName>
    </DataContainer>
    <DataContainer>
      ФИО:
      <DataName>
        &nbsp;
        {privateOrder[0].surname} &nbsp;
        {privateOrder[0].name} &nbsp; {privateOrder[0].patronymic}
      </DataName>
    </DataContainer>
    <DataContainer>
      Номер телефона:
      <DataName> &nbsp;{privateOrder[0].phoneNumber}</DataName>
    </DataContainer>
    <DataContainer>
      Компания:
      <DataName> &nbsp;{privateOrder[0].corporation}</DataName>
    </DataContainer>
    <DataContainer>
      ATI-код:
      <DataName> &nbsp;{match.params.ATICode}</DataName>{' '}
    </DataContainer>
    <DataContainer>
      Дата создания заявки:
      <DataName> &nbsp; {date()}</DataName>
    </DataContainer>
    <Button type='button' onClick={handleDelete}>
      Удалить заявку
    </Button>
  </Container>
)

ProflePage.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  privateOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.func.isRequired,
  match: PropTypes.shape([PropTypes.string, PropTypes.boolean]).isRequired,
}
export default ProflePage
