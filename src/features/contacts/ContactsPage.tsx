import React from 'react'
import debug from 'debug'
import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { Link, useLoaderData } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

import graphql from 'babel-plugin-relay/macro'

import type { ContactsPageQuery as ContactsPageQueryType } from '../../components/__generated__/ContactsPageQuery.graphql'
import { appName } from '../../consts'
import styles from '../../App.module.css'
import ContactsTable from './ContactsTable'

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
  const contactsQueryRef = useLoaderData() as PreloadedQuery<ContactsPageQueryType>
  const data = usePreloadedQuery(ContactsPageQuery, contactsQueryRef)
  return (
    <article className={styles.contactsPage}>
      <ContactsTable contacts={data} />
      <div className={styles.addItemButtonContainer}>
        <Link to="/contacts/new"><AddIcon /></Link>
      </div>
    </article>)
}

export default ContactsPage
