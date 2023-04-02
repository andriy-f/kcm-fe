import React from 'react'
import debug from 'debug'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'

import graphql from 'babel-plugin-relay/macro'

import type { ContactsPageQuery as ContactsPageQueryType } from './__generated__/ContactsPageQuery.graphql'
import { appName } from '../../consts'
import styles from '../../App.module.css'
import ContactsTable from './ContactsTable'
import { useLazyLoadQuery } from 'react-relay'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':ContactsPage.js')

export const ContactsPageQuery = graphql`
  query ContactsPageQuery {
    ...ContactsTableFragment
  }
`

type Props = {
  readonly?: boolean
}

function ContactsPage(props: Props) {
  const data = useLazyLoadQuery<ContactsPageQueryType>(ContactsPageQuery, {})

  return (
    <article className={styles.contactsPage}>
      <ContactsTable contacts={data} />

      <Fab
        sx={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem'
        }}
        color="primary"
        aria-label="add"
        component={Link}
        to='/contacts/new'>
        <AddIcon />
      </Fab>
    </article>)
}

export default ContactsPage
