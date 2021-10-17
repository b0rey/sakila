import React, { useCallback, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled from 'styled-components'
import * as api from '../api'
import { Customer } from './Customer'

const useCustomers = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    api.findAll(setList)
  }, [])

  const update = useCallback(async (id, data) => {
    await api.update(id, data)
    api.findAll(setList)
  }, [])

  return [list, update]
}

export const Customers = styled(props => {
  const [customers, setCustomer] = useCustomers()

  return (
    <div {...props}>
      <DndProvider backend={HTML5Backend}>
        <Customer active={true} list={customers} onDrop={setCustomer} />
        <Customer active={false} list={customers} onDrop={setCustomer} />
      </DndProvider>
    </div>
  )
})`
  display: flex;

  ${Customer} {
    margin: 1em;
  }
`
