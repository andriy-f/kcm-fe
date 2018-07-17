import React from 'react'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'

export default ({ items }) => (
  <Table selectable={false}>
    <TableHead>
      <TableCell>First Name</TableCell>
      <TableCell>Last Name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Phone Number</TableCell>
    </TableHead>
    {items && items.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.firstName || ''}</TableCell>
        <TableCell>{item.lastName || ''}</TableCell>
        <TableCell>{item.email || ''}</TableCell>
        <TableCell>{item.phoneNumber || ''}</TableCell>
        <TableCell>
          {' '}
          {/* <RTIconButtonLink icon="edit" to={"/contacts/" + item._id}></RTIconButtonLink> */}
          {/* <IconButton icon="delete" data-id={item._id} onClick={this.confirmDeleteSingle} /> */}
        </TableCell>
      </TableRow>
    ))}
  </Table>
)
