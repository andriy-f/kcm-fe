// @flow
import debug from 'debug'
import React from 'react'
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table'
import { IconButton } from 'react-toolbox/lib/button'
import { Link } from 'react-router-dom'

import { appName } from '../consts'
import { RTIconButtonLink } from './RTButtonLink'
import { contactsTable__btnCol, contactsTable__link } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':PlainContactsTable.js')

type Props = {
  items?: Object[],
  onDeleteClick(item: Object): void,
}

export default class extends React.Component<Props> {
  render() {
    const { items, onDeleteClick } = this.props
    return (
      <Table selectable={false}>
        <TableHead>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
        </TableHead>
        {items && items.map((item) => {
          const TableCellWithLink = ({ children }) => <TableCell>
            <Link className={contactsTable__link} to={'/contacts/' + item.id}>
              {children}
            </Link>
          </TableCell>
          const { firstName = '', lastName = '', email, phoneNumber } = item
          return (
            <TableRow key={item.id}>
              <TableCellWithLink>{firstName}</TableCellWithLink>
              <TableCellWithLink>{lastName}</TableCellWithLink>
              <TableCell>
                {email
                  ? <a href={'mailto: ' + email}>{email}</a>
                  : ''}
              </TableCell>
              <TableCell>
                {phoneNumber
                  ? <a href={'tel: ' + phoneNumber}>{phoneNumber}</a>
                  : ''}
              </TableCell>
              <TableCell className={contactsTable__btnCol}>
                <RTIconButtonLink icon="edit" to={'/contacts/' + item.id}></RTIconButtonLink>
                <IconButton icon="delete" onClick={onDeleteClick.bind(this, item)} />
              </TableCell>
            </TableRow>
          )
        })}
      </Table>
    )
  }
}
