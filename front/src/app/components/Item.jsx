import React from 'react'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'

const useItemDrag = id => useDrag({ type: '*', item: { id } }, [id])[1]

export const Item = styled(({ id, ...props }) => (
  <div ref={useItemDrag(id)} {...props} />
))`
  background-color: white;
  padding: 0.5rem 1rem;
  cursor: move;
  float: left;
`
