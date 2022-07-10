import React from 'react'
import { Table, TableHead, TableRow } from '../Styles/StyledComponents'
import Items from './Items'
import Total from './Total'

function List({ invoiceList, total }) {
  return (
    <Table>
      <tbody>
        <TableRow head>
          <TableHead>Item name</TableHead>
          <TableHead center>Price</TableHead>
        </TableRow>
        <Items invoiceList={invoiceList} />
        <Total total={total} />
      </tbody>
    </Table>
  )
}

export default List
