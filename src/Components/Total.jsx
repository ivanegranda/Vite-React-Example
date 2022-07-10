import React from 'react'
import { TableRow, TotalTD } from '../Styles/StyledComponents'

function Total({ total }) {
  return (
    <TableRow total>
      <TotalTD></TotalTD>
      <TotalTD center>{total == 0 ? `` : `Total: $${total}`}</TotalTD>
    </TableRow>
  )
}

export default Total
