// @flow
import React from 'react'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'
import { IconButton } from 'react-toolbox/lib/button'

import { RTIconButtonLink } from './RTButtonLink'
import { contactsTable__btnCol} from '../App.css'

type Props = {
  items?: Array<Object>,
  onDeleteClick(item: Object): void
}

export default ({ items, onDeleteClick }: Props) => (
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
        <TableCell className={contactsTable__btnCol}>
          <RTIconButtonLink icon="edit" to={'/contacts/' + item.id}></RTIconButtonLink>
          <IconButton icon="delete" onClick={onDeleteClick.bind(this, item)} />
        </TableCell>
      </TableRow>
    ))}
  </Table>
)
