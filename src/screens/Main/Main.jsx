import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../../ui/components/Navbar/Navbar'
import Table from '../../ui/components/Table/Table'
// import actions from '../../modules/Orders/actions'

const Main = () => {
  const [value, setValue] = useState({
    query: '',
    base: useSelector(state => state.orders.orders),
  })
  const lowercasedFilter = value.query.toLowerCase()
  const filteredData = value.base?.filter(order =>
    order.name.toLowerCase().includes(lowercasedFilter),
  )
  const handleChange = e => setValue({ query: e.target.value })

  // const searching = event => {
  //   const keyword = event.target.value
  //   setValue({ search: dataset.filter(order => order.name.toLowerCase().includes(keyword)) })
  // }
  // const dispatch = useDispatch()
  // useEffect(
  //   () => dataset.filter(order => order.name.toLowerCase().includes(value)),

  //   [value, dataset],
  // )

  return (
    <>
      <Navbar value={value} handleChange={handleChange} />
      <Table filteredData={filteredData} />
    </>
  )
}

export default Main
