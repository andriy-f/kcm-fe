// TODO delete after fully migrating
import debug from 'debug'
import React from 'react'
import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

import { appName } from '../consts'
import styles from '../App.module.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':PlainContactsTable.js')

type Props = {
  items?: any[],
  onDeleteClick(item: unknown): void,
  readonly?: boolean,
}

function PlainContactsTable(props: Props) {
    const { items, onDeleteClick, readonly } = props
    return (
      <Table>
        <TableHead>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
        </TableHead>
        {items && items.map((item) => {
          const { firstName = '', lastName = '', email, phoneNumber } = item
          return (
            <TableRow key={item.id}>
              <TableCell>
            <Link className={styles.contactsTable__link} to={`/contacts/view/${item.id}`}>
              {firstName}
            </Link>
          </TableCell>
              <TableCell>
            <Link className={styles.contactsTable__link} to={`/contacts/view/${item.id}`}>
              {lastName}
            </Link>
          </TableCell>
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
              <TableCell className={styles.contactsTable__btnCol}>
                {readonly ?
                  ''
                  : (
                    <>
                      <Link to={`/contacts/edit/${item.id}`}><EditIcon /></Link>
                      <IconButton onClick={() => { onDeleteClick(item) }}><DeleteIcon /></IconButton>
                    </>)
                }
              </TableCell>
            </TableRow>
          )
        })}
      </Table>
    )
  }

export default PlainContactsTable
