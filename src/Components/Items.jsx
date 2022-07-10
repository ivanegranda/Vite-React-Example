import React, { Fragment } from 'react'
import { DeleteBtn, TableDes, TableRow } from '../Styles/StyledComponents'

function Items({ invoiceList }) {
  const lista = invoiceList.map(item => {
    return (
      <TableRow key={item.name}>
        <TableDes>
          <DeleteBtn>X</DeleteBtn>
          {item.name}
        </TableDes>
        <TableDes center>${item.price}</TableDes>
      </TableRow>
    )
  })
  return <Fragment>{lista}</Fragment>
}

export default Items
