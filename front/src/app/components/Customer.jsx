import React, { useMemo } from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'
import { Item } from './Item'

const useCustomerDrop = (active, onDrop) =>
  useDrop({
    accept: '*',
    drop: item => onDrop(item.id, { active: Number(active) }),
  })[1]

const useCustomerList = (active, list) =>
  useMemo(
    () =>
      list
        .filter(item => item.active === Number(active))
        .map(({ customer_id: id, email }) => (
          <li key={id}>
            <Item id={id}>- {email}</Item>
          </li>
        )),
    [active, list],
  )

export const Customer = styled(({ active, onDrop, list, ...props }) => {
  return (
    <section ref={useCustomerDrop(active, onDrop)} {...props}>
      <h3>{active ? 'Active' : 'Non-active'}</h3>
      <ul>{useCustomerList(active, list)}</ul>
    </section>
  )
})`
  padding: 1em;
  width: 28em;
  border: 1px solid black;

  & > ul {
    margin: 0;
    padding: 0;

    > li {
      list-style: none;
    }
  }
`
