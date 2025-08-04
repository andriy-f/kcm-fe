import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'

import { graphql } from 'react-relay'

import type { ContactsPageQuery as ContactsPageQueryType } from './__generated__/ContactsPageQuery.graphql'
import styles from '../../App.module.css'
import ContactsTable from './ContactsTable'
import { useLazyLoadQuery } from 'react-relay'

export const ContactsPageQuery = graphql`
  query ContactsPageQuery {
    ...ContactsTableFragment
  }
`

function ContactsPage() {
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
        to='/contact/new'>
        <AddIcon />
      </Fab>
    </article>)
}

export default ContactsPage
