import React from 'react'
import debug from 'debug'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

import type { ContactsPageQuery as ContactsPageQueryType } from './__generated__/ContactsPageQuery.graphql'
import { appName } from '../consts'
import styles from '../App.module.css'
import ContactsTable from '../features/contacts/ContactsTable'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug(appName + ':ContactsPage.js')

const ContactsPageQuery = graphql`
  query ContactsPageQuery {
    ...ContactsTableFragment
  }
`

type Props = {
  readonly?: boolean
}

function ContactsPage(props: Props) {
  // const preloaded = useLoaderData()
  const data = useLazyLoadQuery<ContactsPageQueryType>(ContactsPageQuery, {}) // todo
  return (
    <article className={styles.contactsPage}>
      <ContactsTable contacts={data} />
      <div className={styles.addItemButtonContainer}>
        <Link to="/contacts/new"><AddIcon /></Link>
      </div>
    </article>)
}

export default ContactsPage
