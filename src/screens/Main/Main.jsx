import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../../ui/components/Navbar/Navbar'
import Table from '../../ui/components/Table/Table'
// import actions from '../../modules/Orders/actions'

const Main = () => {
  const data = useSelector(state => state.orders.orders)

  const [state, setState] = useState({
    search: '',
    data,
  })

  const handleChange = e => setState(prevState => ({ ...prevState, search: e.target.value }))

  useEffect(() => {
    if (state.search) {
      const filteredData = data.filter(({ name, patronymic, surname, corporation }) =>
        [name, patronymic, surname, corporation].some(item =>
          item.toLowerCase().includes(state.search.toLowerCase()),
        ),
      )

      setState(prevState => ({ ...prevState, data: filteredData }))
    } else {
      setState(prevState => ({ ...prevState, data }))
    }
  }, [data, state.search])

  return (
    <>
      <Navbar value={state.search} handleChange={handleChange} />
      <Table filteredData={state.data} />
    </>
  )
}

export default Main
