// @flow
import debug from 'debug'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'

import { appName } from '../consts'
import { RTIconButtonLink } from './RTButtonLink'
import { contactsTable__btnCol, contactsTable__link } from '../App.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':PlainContactsTable.js')

type Props = {
  items?: Object[],
  onDeleteClick(item: Object): void,
  readonly: boolean,
}

export default class extends React.Component<Props> {
  static defaultProps = {
    readonly: false,
  }

  render() {
    const { items, onDeleteClick, readonly } = this.props
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
            <Link className={contactsTable__link} to={`/contacts/view/${item.id}`}>
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
                {readonly ?
                  ''
                  : (
                    <React.Fragment>
                      <RTIconButtonLink icon="edit" to={`/contacts/edit/${item.id}`}></RTIconButtonLink>
                      <IconButton icon="delete" onClick={onDeleteClick.bind(this, item)} />
                    </React.Fragment>)
                }
              </TableCell>
            </TableRow>
          )
        })}
      </Table>
    )
  }
}
