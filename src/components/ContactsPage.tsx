// @flow
import debug from 'debug'
import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { Link, useLoaderData } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

import FilteringScrollingContactsTable from '../components/FilteringScrollingContactsTable'
import type { ContactsPageQuery as ContactsPageQueryType } from './__generated__/ContactsPageQuery.graphql'
import { appName } from '../consts'
import styles from '../App.module.css'

// eslint-disable-next-line no-unused-vars
const log = debug(appName + ':ContactsPage.js')

const ContactsPageQuery = graphql`
          query ContactsPageQuery {
            ...FilteringScrollingContactsTable_contactsData
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
              <FilteringScrollingContactsTable contactsData={data} readonly={!!props.readonly} />
              <div className={styles.addItemButtonContainer}>
                <Link to="/contacts/new"><AddIcon /></Link>
              </div>
            </article>)
  }

export default ContactsPage
